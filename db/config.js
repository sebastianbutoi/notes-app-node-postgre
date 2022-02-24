import pg from "pg";

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_ID,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }
});

export default function query(text, params) {
    return pool.query(text, params);
}