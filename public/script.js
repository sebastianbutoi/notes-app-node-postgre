const saveButton = document.querySelector("#save");
const showDataButton = document.querySelector("#show-data");
const deleteNoteButton = document.querySelector("#delete-note");
const updateButton = document.querySelector("#update-note");

function addNote(note) {
  const notesContainer = document.querySelector("#notes");
  const newTitle = document.createElement("h3");
  const newNote = document.createElement("p");
  newTitle.innerText = note.title;
  newNote.innerText = note.text;
  notesContainer.appendChild(newTitle);
  notesContainer.appendChild(newNote);
  notesContainer.appendChild(document.createElement("hr"));
}

async function getNotes() {
  const response = await fetch("http://localhost:3000/notes");
  const data = await response.json();
  const container = document.querySelector("#notes");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  data.forEach((element) => addNote(element));
}

async function postNote() {
  const selectTitle = document.querySelector("#title").value;
  const selectNote = document.querySelector("#text").value;
  const note = { title: selectTitle, text: selectNote };
  const response = await fetch("http://localhost:3000/notes", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(note),
  });
}

async function deleteNote() {
  const toDelete = document.querySelector("#title").value;
  if (toDelete === "" || toDelete === undefined) {
    alert("Please insert a title to delete");
  }
  const response = await fetch("http://localhost:3000/notes", {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    body: JSON.stringify({ title: toDelete }),
  });
}

async function updateNote() {
  const selectTitle = document.querySelector("#title").value;
  const selectNote = document.querySelector("#text").value;
  const note = { title: selectTitle, text: selectNote };
  const response = await fetch("http://localhost:3000/notes", {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify(note),
  });
}

saveButton.addEventListener("click", postNote);

showDataButton.addEventListener("click", getNotes);

deleteNoteButton.addEventListener("click", deleteNote);

updateButton.addEventListener("click", updateNote);
