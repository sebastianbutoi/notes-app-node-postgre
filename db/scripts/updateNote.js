import query from "../config.js";

export async function updateNote({ text, title }) {
  const res = await query(`UPDATE notes SET text = ($1) WHERE title = ($2);`, [
    text,
    title,
  ]);
  return res.rows;
}
