describe("NotesApplication", function() {
    var author = "Ehime";
    var note_content = "Buy milk";
    var notes = ["Buy milk"];
    var note_id = 0;
    var search_text = "uy";
    var new_content = "Buy sugar";
    describe("note creator", function() {
        it("saves note in an array", function() {
            create = function(note_content) {
                return notes;
            }
            expect(create(note_content)).toEqual(notes);
        }); 
        it("only accepts strings", function() {
            expect(typeof note_content).toEqual("string");
        });
    });
    describe("note formatter", function() {
        listNotes = function(note_id, note_content) {

        }
        it("lists notes by id", function() {
            expect(listNotes(0, "Buy milk")).toEqual(console.log("Note ID: " + note_id + "\n" + "Buy milk" + "\n" + "\n" + "\n" + "By Author " + author));
        });
    });
    describe("search notes", function() {
        get = function(note_id) {
            
        }
        search = function(search_text) {
            if(notes.includes(search_text)) {
                
            }
            else {
                
            }
        }
        it("can find notes by id", function() {
            expect(get(note_id)).toEqual(console.log("Note ID: " + note_id + "\n" + note_content + "\n" + "\n" + "\n" + "By Author " + author));
        });
        it("can find notes by content", function() {
            expect(search(search_text)).toEqual(console.log("Showing results for search " + search_text + "\n" + "\n" + "Note ID: " + note_id + "\n" + note_content + "\n" + "\n" + "\n" + "By Author " + author));
        });
        it("only accepts strings as arguments", function() {
            expect(typeof search_text).toEqual("string");
        });
    });
    describe("delete notes", function() {
        del = function(note_id) {
            return notes -= notes[note_id];
        }
        it("can remove saved notes", function() {
            expect(notes).toEqual([]);
        });
    });
    describe("edit notes", function() {
        edit = function(note_id, new_content) {

        }
        it("can modify notes", function() {
            expect(notes[note_id]).toEqual(new_content);
        });
    });
})

