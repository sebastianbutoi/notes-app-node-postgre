import query from "../config.js";

const sqlString = `SELECT * FROM notes ORDER BY id;`;

export async function readNotesTable() {
  const res = await query(sqlString);
  return res.rows;
}
