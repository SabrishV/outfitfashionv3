package routes

import (
	"backend/controller"

	"github.com/gofiber/fiber/v2"
)

func RegisterRoutes(app *fiber.App) {
	// Register product routes
	app.Get("/products", controller.GetProducts)
}
