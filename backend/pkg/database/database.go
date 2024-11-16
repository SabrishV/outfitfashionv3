package database

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

// Connect establishes a connection to the database
func Connect() error {
	var err error
	// Change the DSN as per your MySQL database credentials
	dsn := "root:krishspyk123@tcp(localhost:3306)/trial_db"
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		return err
	}

	// Verify the connection
	err = DB.Ping()
	if err != nil {
		return err
	}

	log.Println("Database connected successfully!")
	return nil
}
