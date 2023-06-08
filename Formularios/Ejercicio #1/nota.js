const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const notesContainer = document.getElementById("notes");

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function createNoteElement(note) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = note.title;

  const body = document.createElement("p");
  body.textContent = note.body;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    card.remove();
    deleteNoteFromStorage(note.id);
    alert("Nota eliminada correctamente.");
  });

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "Editar";

  editButton.addEventListener("click", () => {
    const editForm = document.createElement("form");
    editForm.classList.add("edit-form");

    const editTitleInput = document.createElement("input");
    editTitleInput.classList.add("edit-title");
    editTitleInput.value = note.title;

    const editBodyInput = document.createElement("textarea");
    editBodyInput.classList.add("edit-body");
    editBodyInput.value = note.body;

    const saveButton = document.createElement("button");
    saveButton.classList.add("save");
    saveButton.textContent = "Guardar";

    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTitle = editTitleInput.value;
      const newBody = editBodyInput.value;
      updateNoteInStorage(note.id, newTitle, newBody);
      title.textContent = newTitle;
      body.textContent = newBody;
      editForm.remove();
      alert("Nota actualizada correctamente.");
    });

    editForm.appendChild(editTitleInput);
    editForm.appendChild(editBodyInput);
    editForm.appendChild(saveButton);

    card.appendChild(editForm);
  });

  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(deleteButton);
  card.appendChild(editButton);

  return card;
}

function saveNoteToStorage(note) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNoteFromStorage(id) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const filteredNotes = notes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(filteredNotes));
}

function updateNoteInStorage(id, title, body) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const noteIndex = notes.findIndex((note) => note.id === id);
  notes[noteIndex].title = title;
  notes[noteIndex].body = body;
  localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  for (const note of notes) {
    const noteElement = createNoteElement(note);
    notesContainer.appendChild(noteElement);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  const id = generateId();
  const note = { title, body, id };
  saveNoteToStorage(note);
  const noteElement = createNoteElement(note);
  notesContainer.appendChild(noteElement);
  titleInput.value = "";
  bodyInput.value = "";
});

window.addEventListener("load", displayNotes);
