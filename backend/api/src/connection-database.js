import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "supermarket",
    password: process.env.PASSWORD,
    port: 5432,
  });
db.connect();

export default db