import query from "../config.js";

export async function populateNotesTable({ title, text }) {
  const res = await query(`INSERT INTO notes (title, text) VALUES ($1, $2);`, [
    title,
    text,
  ]);
  return res.rows;
}
