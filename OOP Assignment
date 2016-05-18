//Construct an object that functions as a note-taking application 
function NotesApplication(author, note_content) {
	this.author = author; //initialize the author parameter for the object
	this.note_content = note_content; //initialize note_content parameter for the object
	this.notes = []; //create an empty list to hold future notes
	this.note_id = this.notes.indexOf(note_content); //initialize note_id for future methods

	//we need a method that allows us to add new notes to the list
	function create(note_content) {
		this.notes.push(note_content); //add the given note_content to the list
		return this.notes; //return the updated list
	}

	//we need a method that shows all the saved notes in a pretty format
	function listNotes(note_id, note_content) {
		console.log("Note ID: " + note_id + "\n" + note_content + "\n" + "\n" + "\n" + "By Author " + author);
	}	//print out the notes in the format specified

	//we need a method that lets us find notes by id
	function get(note_id) {
		return this.notes[note_id].toString();
	}	//the note id corresponds to the index of the note in the "notes" list
		//this function returns the note id (index) as a string

	//we need a method that lets us search for notes by content
	function search(search_text) {
		if (this.notes.includes(search_text) === true) {
			console.log("Showing results for search " + search_text + "\n" + "\n" + "Note ID: " + note_id + "\n" + note_content + "\n" + "\n" + "\n" + "By Author " + author);
		}//if the search terms match text in any note, print the results in the above format
		else {
			console.log("No match found");
		}//otherwise, print the above message
	}

	//we need a method that allows us to delete notes
	function del(note_id) {
		return this.notes -= this.notes[note_id];
	}//remove the contents of the specified note from the 'notes' list

	//we need a method that lets us edit notes
	function edit(note_id, new_content) {
		this.notes[note_id] = new_content;//replace the contents of the note at the specified index with the 'new_content'
		return this.notes[note_id];//this function returns the modified note
	}


}
//to work on: 1) how to refine the search function; 2) do I need to use [this] within functions?