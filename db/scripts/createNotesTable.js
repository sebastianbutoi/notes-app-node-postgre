import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS notes (id SERIAL PRIMARY KEY, title TEXT, text TEXT);`;

async function createNotesTable() {
  const res = await query(sqlString);
  console.log("Created notes table ", res);
  return;
}

createNotesTable();
