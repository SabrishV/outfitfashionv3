package database

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

// Connect establishes a connection to the database
func Connect() (*sql.DB, error) {
	var err error
	// Change the DSN as per your MySQL database credentials
	dsn := "root:krishspyk123@tcp(localhost:3306)/trial_db"
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}

	// Verify the connection
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}
