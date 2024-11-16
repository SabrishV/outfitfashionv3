package database

import (
	"database/sql"
	"fmt"
	"log"
)

// RunMigrations checks for tables and creates them if they don't exist using SQL DDL.
func RunMigrations(db *sql.DB) error {
	tables := map[string]string{
		"users": `CREATE TABLE IF NOT EXISTS users (
			UserID INT AUTO_INCREMENT PRIMARY KEY,
			FullName VARCHAR(255) NOT NULL,
			Email VARCHAR(255) UNIQUE NOT NULL,
			Password VARCHAR(255) NOT NULL,
			Phone VARCHAR(20),
			CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);`,

		"admin": `CREATE TABLE IF NOT EXISTS admin (
			AdminID INT AUTO_INCREMENT PRIMARY KEY,
			Username VARCHAR(255) NOT NULL,
			Email VARCHAR(255) UNIQUE NOT NULL,
			Password VARCHAR(255) NOT NULL,
			CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);`,

		"admin_supervisor": `CREATE TABLE IF NOT EXISTS admin_supervisor (
			SupervisorID INT AUTO_INCREMENT PRIMARY KEY,
			Username VARCHAR(255) NOT NULL,
			Email VARCHAR(255) UNIQUE NOT NULL,
			Password VARCHAR(255) NOT NULL,
			CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);`,

		"cart_item": `CREATE TABLE IF NOT EXISTS cart_item (
			CartItemID INT AUTO_INCREMENT PRIMARY KEY,
			UserID INT NOT NULL,
			ProductID INT NOT NULL,
			Quantity INT DEFAULT 1,
			FOREIGN KEY (UserID) REFERENCES users(UserID),
			FOREIGN KEY (ProductID) REFERENCES products(ProductID)
		);`,

		"merchant": `CREATE TABLE IF NOT EXISTS merchant (
			MerchantID INT AUTO_INCREMENT PRIMARY KEY,
			CompanyName VARCHAR(255) NOT NULL,
			Email VARCHAR(255) UNIQUE NOT NULL,
			Password VARCHAR(255) NOT NULL,
			Phone VARCHAR(20),
			CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);`,

		"merchant_request": `CREATE TABLE IF NOT EXISTS merchant_request (
			MerchantRequestID INT AUTO_INCREMENT PRIMARY KEY,
			MerchantID INT NOT NULL,
			Status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
			RequestedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (MerchantID) REFERENCES merchant(MerchantID)
		);`,

		"place_order": `CREATE TABLE IF NOT EXISTS place_order (
			PlaceOrderID INT AUTO_INCREMENT PRIMARY KEY,
			UserID INT NOT NULL,
			OrderStatus ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
			OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
			TotalAmount DECIMAL(10, 2),
			FOREIGN KEY (UserID) REFERENCES users(UserID)
		);`,

		"orders": `CREATE TABLE IF NOT EXISTS orders (
			OrderID INT AUTO_INCREMENT PRIMARY KEY,
			UserID INT NOT NULL,
			OrderStatus ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
			OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
			TotalAmount DECIMAL(10, 2),
			FOREIGN KEY (UserID) REFERENCES users(UserID)
		);`,

		"order_details": `CREATE TABLE IF NOT EXISTS order_details (
			OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
			OrderID INT NOT NULL,
			ProductID INT NOT NULL,
			Quantity INT DEFAULT 1,
			PriceAtPurchase DECIMAL(10, 2),
			FOREIGN KEY (OrderID) REFERENCES orders(OrderID),
			FOREIGN KEY (ProductID) REFERENCES products(ProductID)
		);`,

		"products": `CREATE TABLE IF NOT EXISTS products (
			ProductID INT AUTO_INCREMENT PRIMARY KEY,
			ProductName VARCHAR(255) NOT NULL,
			Description TEXT,
			Price DECIMAL(10, 2) NOT NULL,
			Category VARCHAR(100),
			Stock INT DEFAULT 0,
			ImageURL TEXT,
			Details TEXT,  -- Added column for product details description
			CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
			UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		);`,

		"product_media": `CREATE TABLE IF NOT EXISTS product_media (
			ProductMediaID INT AUTO_INCREMENT PRIMARY KEY,
			ProductID INT NOT NULL,
			ImageURL TEXT,
			FOREIGN KEY (ProductID) REFERENCES products(ProductID)
		);`,

		"product_inventory": `CREATE TABLE IF NOT EXISTS product_inventory (
			ProductInventoryID INT AUTO_INCREMENT PRIMARY KEY,
			ProductID INT NOT NULL,
			Stock INT DEFAULT 0,
			Size VARCHAR(50),
			Color VARCHAR(50),
			Threshold INT DEFAULT 0,
			FOREIGN KEY (ProductID) REFERENCES products(ProductID)
		);`,

		"shipping_info": `CREATE TABLE IF NOT EXISTS shipping_info (
			ShippingInfoID INT AUTO_INCREMENT PRIMARY KEY,
			UserID INT NOT NULL,
			FullName VARCHAR(255) NOT NULL,
			AddressLine1 TEXT NOT NULL,
			AddressLine2 TEXT,
			City VARCHAR(100),
			State VARCHAR(100),
			ZipCode VARCHAR(20),
			Country VARCHAR(100),
			FOREIGN KEY (UserID) REFERENCES users(UserID)
		);`,

		"payments": `CREATE TABLE IF NOT EXISTS payments (
			PaymentID INT AUTO_INCREMENT PRIMARY KEY,
			UserID INT NOT NULL,
			CardHolderName VARCHAR(255) NOT NULL,
			CardNumber VARCHAR(20) NOT NULL,
			ExpiryDate VARCHAR(10),
			CardType ENUM('Credit', 'Debit') NOT NULL,
			FOREIGN KEY (UserID) REFERENCES users(UserID)
		);`,
	}

	// Iterate through the tables and execute the create table query
	for tableName, query := range tables {
		_, err := db.Exec(query)
		if err != nil {
			log.Printf("Error creating table %s: %v\n", tableName, err)
		} else {
			fmt.Printf("Table %s checked/created successfully.\n", tableName)
		}
	}

	return nil
}
