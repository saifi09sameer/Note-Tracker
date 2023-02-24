## Practice

This practice comprises 4 exercises

## Context

Keep App is an app that allows user to maintain his daily todo tasks.

The app allows users to add new note, view all notes, delete the selected note.

The app should allow the users to view the notes in grid view as well as list view.

### Problem Statements

#### Practice 1 - Add New Note to ToDo List 

Add new script.js file.

Use the `<script>` tag in index.html file to refer to the script.js file

In the script.js file, define JavaScript function `addNote()` to add new note

The function should 
    - read the note details inputted by the user on the web page
    - store the note details in array of notes.

The function should get invoked when the user clicks on `Add Note` button.

Ensure the note should not be saved if any of the details are missing.

For all the fields missing with input, error message should be displayed along side the field text box.

If the note is successfully stored, a confirmation message should be displayed on the console.

#### Practice 2 - Display All Notes from ToDo List

In the `script.js` file, define JavaScript function `displayNotes()` to display all notes saved in notes array.

The function should 
- read the note details from the array
- For each note in the array, the function should dynamically add a div element.
    - The div element should contain
        - heading element to display note title
        - para element to display note content
    - The div element should be applied with style properties that displays note in a card layout.
The function should get invoked when the page loads.

#### Practice 3 - Delete Note from Todo List 

In the script.js file, modify the code that displays each note to dynamically add a button to delete note.

Style the button to make it look raised.

The button should invoke event handler method when it is clicked.

Define JavaScript function deleteNote to delete the selected note and remove it from the notes array.

The function should 
- accept note id as the parameter
- find the note by the id in the array and remove the note if found and display the confirmation message
- If the note is not found the function should display the error message

The function should be used as the event handler method for the click event of the delete button.

#### Practice 4 - Toggle Notes View

The default view of the notes displayed should be a grid view.

Define function toggleView(), which gets invoked when the Toggle View link on the page gets clicked.

The toggleView() function should dynamically add styles / css class that toggles the view between grid view and list view.
