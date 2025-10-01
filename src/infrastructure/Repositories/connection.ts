import mysql, { Pool } from "mysql2/promise";

const pool: Pool = mysql.createPool({
  host: "localhost",
  user: "root",      
  password: "58875887", 
  database: "Fitlife",       
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
