package model

import "time"

type User struct {
	ID          uint      `json:"id" gorm:"primaryKey"`
	Email       string    `json:"email" gorm:"unique"`
	Password    string    `json:"password"`
	AccountName string    `json:"accountname"`
	IconImage   []byte    `json:"iconimage"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type UserResponse struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Email       string `json:"email" gorm:"unique"`
	AccountName string `json:"accountname"`
	IconImage   string `json:"iconimage"`
}
