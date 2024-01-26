CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "firstName" varchar,
  "lastName" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "products" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "category_id" integer,
  "price" varchar
);

CREATE TABLE "purchases" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "total_amount" decimal,
  "purchase_date" timestamp,
);

CREATE TABLE "purchase_items" (
  "id" integer PRIMARY KEY,
  "purchase_id" integer,
  "product_id" integer,
  "quantity" integer,
  "subtotal" decimal
);

CREATE TABLE "categories" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "purchases" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "purchase_items" ADD FOREIGN KEY ("purchase_id") REFERENCES "purchases" ("id");

ALTER TABLE "purchase_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
