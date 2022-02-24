import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readNotesTable } from "./db/scripts/readNotesTable";
import { populateNotesTable } from "./db/scripts/populateNotesTable";
import { deleteNote } from "./db/scripts/deleteNote";
import { updateNote } from "./db/scripts/updateNote";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/notes", async (req, res) => {
  const data = await readNotesTable();
  res.json({ data });
});

app.post("/notes", async (req, res) => {
  const data = await populateNotesTable(req.body);
  res.status(201).json({ data });
});

app.delete("/notes", async (req, res) => {
  const data = await deleteNote(req.body);
  res.status(200).json({ data });
});

app.patch("/notes", async (req, res) => {
  const data = await updateNote(req.body);
  res.status(200).json({ data });
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
