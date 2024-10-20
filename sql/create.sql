CREATE DATABASE RestaurantManagement;
USE RestaurantManagement;

CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    UserEmail VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Name VARCHAR(255),
    Phone VARCHAR(20) UNIQUE,
    Role ENUM('Admin', 'Customer') NOT NULL,
    RegistrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Active', 'Inactive') DEFAULT 'Active',
    VerificationStatus ENUM('Email verified', 'Phone verified') DEFAULT 'Email verified'
);

CREATE TABLE Admin (
    AdminID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CustomerAddress TEXT,
    LoyaltyPoints INT DEFAULT 0,
    OrderHistory TEXT,
    CouponsUsed TEXT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE MenuItem (
    MenuItemID INT AUTO_INCREMENT PRIMARY KEY,
    MenuItemName VARCHAR(255),
    Description TEXT,
    Price DECIMAL(10, 2),
    Category VARCHAR(255),
    AvailabilityStatus ENUM('Available', 'Unavailable') DEFAULT 'Available'
);

CREATE TABLE Staff (
    StaffID INT AUTO_INCREMENT PRIMARY KEY,
    StaffName VARCHAR(255),
    Role VARCHAR(255),
    StaffPhone VARCHAR(20),
    StaffEmail VARCHAR(255)
);

CREATE TABLE Coupon (
    CouponID INT AUTO_INCREMENT PRIMARY KEY,
    CouponCode VARCHAR(255),
    DiscountAmount DECIMAL(10, 2),
    ExpiryDate DATE,
    TotalAvailableUses INT,
    UsageLimit INT DEFAULT 2
);

CREATE TABLE `Order` (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    StaffID INT,
    CouponID INT,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10, 2),
    OrderStatus ENUM('Pending', 'Confirmed', 'Delivered', 'Canceled') DEFAULT 'Pending',
    DeliveryType ENUM('Pickup', 'Standard Delivery', 'Express Delivery') DEFAULT 'Pickup',
    DeliveryAddress TEXT,
    PaymentStatus ENUM('Paid', 'Unpaid') DEFAULT 'Unpaid',
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (StaffID) REFERENCES Staff(StaffID),
    FOREIGN KEY (CouponID) REFERENCES Coupon(CouponID)
);

CREATE TABLE OrderItem (
    OrderItemID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    MenuItemID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID),
    FOREIGN KEY (MenuItemID) REFERENCES MenuItem(MenuItemID)
);

CREATE TABLE Payment (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderID INT,
    PaymentMethod VARCHAR(255),
    PaymentStatus ENUM('Paid', 'Unpaid') DEFAULT 'Unpaid',
    PaymentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    AmountPaid DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID)
);

CREATE TABLE Review (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    MenuItemID INT,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    ReviewText TEXT,
    ReviewDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (MenuItemID) REFERENCES MenuItem(MenuItemID)
);

CREATE TABLE Driver (
    DriverID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    Name VARCHAR(255),
    Phone VARCHAR(20),
    Rating DECIMAL(3, 2),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID)
);

CREATE TABLE Delivery (
    DeliveryID INT AUTO_INCREMENT PRIMARY KEY,
    DriverID INT,
    DeliveryType ENUM('Express', 'Economy') DEFAULT 'Economy',
    DeliveryStatus ENUM('Pending', 'In Transit', 'Delivered') DEFAULT 'Pending',
    FOREIGN KEY (DriverID) REFERENCES Driver(DriverID)
);

DELIMITER $$

CREATE TRIGGER after_order_confirm
AFTER UPDATE ON `Order`
FOR EACH ROW
BEGIN
    IF NEW.OrderStatus = 'Confirmed' THEN
        -- Assuming 10 loyalty points are awarded for each confirmed order
        UPDATE Customer
        SET LoyaltyPoints = LoyaltyPoints + 10
        WHERE CustomerID = NEW.CustomerID;
    END IF;
END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER before_coupon_use
BEFORE UPDATE ON `Order`
FOR EACH ROW
BEGIN
    DECLARE coupon_usage INT;
    
    -- Check how many times the customer has used the coupon
    SELECT COUNT(*) INTO coupon_usage
    FROM `Order`
    WHERE CustomerID = NEW.CustomerID AND CouponID = NEW.CouponID;

    -- If coupon usage is greater than or equal to 2, prevent the order from being updated
    IF coupon_usage >= 2 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Coupon has been used the maximum allowed times';
    END IF;
END$$

DELIMITER ;

