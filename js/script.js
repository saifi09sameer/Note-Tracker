// Define an empty array to store notes
let notes = [];
// Function to toggle background color
function toggleView() {
  var body = document.querySelector("body");
  var randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Function to add a new note to the notes array
function addNote(event) {
  event.preventDefault();
  // Get user input for title, description, and color
  let title = document.getElementById("titleId").value;
  let description = document.getElementById("descriptionId").value;
  let color = document.getElementById("note-color").value;

  // Create a new note object with the input data
  let note = {
    title: title,
    description: description,
    color: color,
    date: new Date().toLocaleDateString(),
  };

  // Add the new note object to the notes array
  notes.push(note);

  // Call showNotes to update the UI
  showNotes();
}

// Function to display all notes in the notes array
function showNotes() {
  // Get the note container element
  let noteContainer = document.getElementById("note-container");

  // Remove any existing notes from the container
  noteContainer.innerHTML = "";

  // Loop through all notes and create a card for each note
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    let card = createNoteCard(note, i);
    noteContainer.appendChild(card); // append the div element to the pass element create nre child
  }
}

// Function to hide all notes from the UI
function hideNotes() {
  // Remove any existing notes from the container
  document.getElementById("note-container").innerHTML = "";
}

// Function to delete a specific note from the notes array and update the UI
function deleteNoteByIndex(index) {
  // Remove note from the array at the given index
  notes.splice(index, 1);

  // Call showNotes to update the UI
  showNotes();
}

function createNoteCard(note, index) {
  // Create card element
  let card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = note.color;
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
  card.style.padding = "10px";
  card.style.width = "300px";
  card.style.height = "180px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "space-between";

  // Create card title element
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = note.title;
  cardTitle.style.margin = "0";

  // Create card text element
  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = note.description;
  cardText.style.margin = "0";

  // Create card footer element
  let cardFooter = document.createElement("div");
  cardFooter.style.display = "flex";
  cardFooter.style.justifyContent = "space-between";
  cardFooter.style.alignItems = "center";

  // Create card number element
  let cardNumber = document.createElement("span");
  cardNumber.textContent = "#" + (index + 1);
  cardNumber.style.fontSize = "12px";
  cardNumber.style.color = "#999";

  let dateSpan = document.createElement("span");
  dateSpan.textContent = note.date;
  dateSpan.style.fontSize = "12px";
  dateSpan.style.color = "#999";

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.style.fontSize = "12px";
  deleteButton.style.marginRight = "5px";
  deleteButton.addEventListener("click", () => deleteNoteByIndex(index));
  
  // Add title, text, footer elements to the card element
  card.appendChild(cardTitle);
  card.appendChild(cardText);
  card.appendChild(cardFooter);
  
  // Add card number, date, and delete button to the card footer element
  cardFooter.appendChild(cardNumber);
  cardFooter.appendChild(dateSpan);
  cardFooter.appendChild(deleteButton);
  
  return card;
} 
