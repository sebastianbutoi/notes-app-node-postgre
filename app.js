import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readNotesTable } from "./db/scripts/readNotesTable.js";
import { populateNotesTable } from "./db/scripts/populateNotesTable.js";
import { deleteNote } from "./db/scripts/deleteNote.js";
import { updateNote } from "./db/scripts/updateNote.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/notes", async (req, res) => {
  const data = await readNotesTable();
  res.json({ status: "success", payload: data });
});

app.post("/notes", async (req, res) => {
  const data = await populateNotesTable(req.body);
  res.status(201).json({ status: "success", payload: data });
});

app.delete("/notes", async (req, res) => {
  const data = await deleteNote(req.body);
  res.status(200).json({ status: "success", payload: data });
});

app.patch("/notes", async (req, res) => {
  const data = await updateNote(req.body);
  res.status(200).json({ status: "success", payload: data });
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
