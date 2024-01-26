import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "supermarket",
    password: "nogueira2016",
    port: 5432,
  });
db.connect();

export default db