import query from "../config";

const sqlString = `SELECT * FROM notes ORDER BY id;`;

export async function readNotesTable() {
  const res = await query(sqlString);
  return res.rows;
}
