-- Insert users with specific IDs
INSERT INTO "users" ("id", "firstName", "lastName", "email", "password") VALUES
  (1, 'João', 'Silva', 'joao@email.com', 'password123'),
  (2, 'Maria', 'Santos', 'maria@email.com', 'password456'),
  (3, 'Carlos', 'Ferreira', 'carlos@email.com', 'password789');

-- Insert categories
INSERT INTO "categories" ("id", "name") VALUES
  (1, 'Fruits'),
  (2, 'Vegetables'),
  (3, 'Meat'),
  (4, 'Dairy'),
  (5, 'Beverages'),
  (6, 'Bakery');

-- Insert products
INSERT INTO "products" ("id", "name", "category_id", "price") VALUES
  (1, 'Apple', 1, '2.50'),
  (2, 'Tomato', 2, '1.80'),
  (3, 'Chicken Meat', 3, '5.50'),
  (4, 'Cheddar Cheese', 4, '3.20'),
  (5, 'Cola Soda', 5, '1.99'),
  (6, 'French Bread', 6, '0.90');

-- Insert purchases
INSERT INTO "purchases" ("id", "user_id", "total_amount", "purchase_date") VALUES
  (1, 1, '10.50', '2024-01-26 10:30:00'),
  (2, 2, '5.40', '2024-01-26 11:45:00'),
  (3, 3, '10.90', '2024-01-26 13:15:00');

-- Insert purchase items
INSERT INTO "purchase_items" ("id", "purchase_id", "product_id", "quantity", "subtotal") VALUES
  (1, 1, 1, 2, '5.00'),
  (2, 1, 3, 1, '5.50'),
  (3, 2, 2, 3, '5.40'),
  (4, 3, 4, 2, '6.40'),
  (5, 3, 6, 5, '4.50');
