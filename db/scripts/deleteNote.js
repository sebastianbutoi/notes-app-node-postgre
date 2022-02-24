import query from "../config.js";

export async function deleteNote({title}) {
  const res = await query(`DELETE FROM notes WHERE title = ($1)`, [title]);
  return res.rows;
}
