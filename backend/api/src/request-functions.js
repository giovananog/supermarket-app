// connection-database.js
import db from "./connection-database.js";

export async function getAllProducts () {
  try {
    const result = await db.query("SELECT * FROM products");
    return result;
  } catch (error) {
    console.error('Error', error);
    throw error; 
  }
};

export async function getAllCategories () {
    try {
      const result = await db.query("SELECT * FROM categories");
      return result;
    } catch (error) {
      console.error('Error', error);
      throw error; 
    }
};

export async function getProductsFromCategory (category) {
    try {
      const result = await db.query("SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE name = $1); ", [category]);
      return result;
    } catch (error) {
      console.error('Error', error);
      throw error; 
    }
};

export async function getPurchasesFromUser (name) {
    try {
      const result = await db.query("SELECT * FROM purchases WHERE user_id = (SELECT id FROM users WHERE firstName = $1); ", [name]);
      return result;
    } catch (error) {
      console.error('Error', error);
      throw error; 
    }
};

export async function validateLogin (email, password) {
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2; ", [email, password]);
    return result.rows.length > 0;
  } catch (error) {
    console.error('Error', error);
    throw error; 
  }
};
