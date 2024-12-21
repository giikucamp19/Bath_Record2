package usecase

import (
	model "bath_record/models"
	"bath_record/repository"
	"bath_record/validator"
	"encoding/base64"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

type IUserUsecase interface {
	SignUp(user model.User) (model.UserResponse, error)
	Login(user model.User) (string, error)
	GetUserByID(userID uint) (model.UserResponse, error)
}

type userUsecase struct {
	ur repository.IUserRepository
	uv validator.IUserValidator
}

func NewUserUsecase(ur repository.IUserRepository, uv validator.IUserValidator) IUserUsecase {
	return &userUsecase{ur, uv}
}

func (uu *userUsecase) SignUp(user model.User) (model.UserResponse, error) {
	if err := uu.uv.UserValidate(user); err != nil {
		return model.UserResponse{}, err
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	if err != nil {
		return model.UserResponse{}, err
	}

	newUser := model.User{
		Email:       user.Email,
		Password:    string(hash),
		AccountName: user.AccountName,
		IconImage:   user.IconImage,
	}

	if err := uu.ur.CreateUser(&newUser); err != nil {
		return model.UserResponse{}, err
	}

	var base64Icon string
	if len(newUser.IconImage) > 0 {
		base64Icon = base64.StdEncoding.EncodeToString(newUser.IconImage)
	}

	resUser := model.UserResponse{
		ID:          newUser.ID,
		Email:       newUser.Email,
		AccountName: newUser.AccountName,
		IconImage:   base64Icon,
	}

	return resUser, nil
}

func (uu *userUsecase) Login(user model.User) (string, error) {
	if err := uu.uv.UserValidate(user); err != nil {
		return "", err
	}
	storedUser := model.User{}
	if err := uu.ur.GetUserByEmail(&storedUser, user.Email); err != nil {
		return "", err
	}
	err := bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(user.Password))
	if err != nil {
		return "", err
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": storedUser.ID,
		"exp":     time.Now().Add(time.Hour * 12).Unix(),
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func (uu *userUsecase) GetUserByID(userID uint) (model.UserResponse, error) {
	u := model.User{}
	if err := uu.ur.GetUserByID(&u, userID); err != nil {
		return model.UserResponse{}, err
	}

	var base64Icon string
	if len(u.IconImage) > 0 {
		base64Icon = base64.StdEncoding.EncodeToString(u.IconImage)
	}

	return model.UserResponse{
		ID:          u.ID,
		Email:       u.Email,
		AccountName: u.AccountName,
		IconImage:   base64Icon,
	}, nil
}
