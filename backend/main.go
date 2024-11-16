package main

import (
	database "backend/pkg/db" // Import the database package
	"log"
)

func main() {
	// Initialize the database connection
	db, err := database.Connect()
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	// Run database migrations
	if err := database.RunMigrations(db); err != nil {
		log.Fatalf("Failed to run migrations: %v", err)
	}

	log.Println("Server is running...")
	// Add server initialization code here (e.g., starting an HTTP server)
}
