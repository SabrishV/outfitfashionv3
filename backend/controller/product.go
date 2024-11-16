package controller

import (
	"backend/pkg/database"
	"backend/pkg/models"
	"log"

	"github.com/gofiber/fiber/v2"
)

func GetProducts(c *fiber.Ctx) error {
	log.Println("Starting to fetch products...") // Debugging log

	// Query to fetch products
	rows, err := database.DB.Query("SELECT ProductID, ProductName, Description, Price, Category, Stock, ImageURL, Details FROM products")

	if err != nil {
		log.Printf("Database query failed: %v", err) // Log the error
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch products"})
	}
	defer rows.Close()

	var products []models.Product
	for rows.Next() {
		var product models.Product
		if err := rows.Scan(
			&product.ProductID,
			&product.ProductName,
			&product.Description,
			&product.Price,
			&product.Category,
			&product.Stock,
			&product.ImageURL,
			&product.Details,
		); err != nil {
			log.Printf("Row scanning failed: %v", err) // Log the error
			return c.Status(500).JSON(fiber.Map{"error": "Error scanning product data"})
		}
		products = append(products, product)
	}

	log.Println("Products fetched successfully!") // Debugging log
	return c.JSON(products)
}
