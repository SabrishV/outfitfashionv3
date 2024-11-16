package main

import (
	database "backend/pkg/database"
	"backend/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// Initialize the database connection
	if err := database.Connect(); err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer database.DB.Close()

	// Run migrations
	if err := database.RunMigrations(database.DB); err != nil {
		log.Fatalf("Failed to run migrations: %v", err)
	}

	// Create a new Fiber app
	app := fiber.New()

	// Register routes
	routes.RegisterRoutes(app)

	// Start the server
	log.Println("Server is running on http://localhost:8080")
	log.Fatal(app.Listen(":8080"))
}
