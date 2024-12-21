package main

import (
	"bath_record/controller"
	"bath_record/db"
	"bath_record/repository"
	"bath_record/router"
	"bath_record/usecase"
	"bath_record/validator"
)

func main() {
	db := db.NewDB()
	userValidator := validator.NewUserValidator()
	userRepository := repository.NewUserRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepository, userValidator)
	userController := controller.NewUserController(userUsecase)
	e := router.NewRouter(userController)
	e.Logger.Fatal(e.Start(":8080"))
}
