describe("NotesApplication", function() {
    var author = "Ehime";
    var note_content = "Buy milk";
    var notes = ["Buy milk"];
    var note_id = 0;
    describe("note creator", function() {
        it("saves note in an array", function() {
            expect(create(note_content)).toEqual(notes);
        }); 
        it("only accepts strings", function() {
            expect(typeof(note_content)).toEqual("string");
        });
    });
    describe("note formatter", function() {
        it("lists notes by id", function() {
            expect(listNotes(0, "Buy milk")).toEqual("Note ID: " + 1 + "\n" + "Buy sugar" + "\n" + "\n" + "\n" + "By Author " + author);
        });
    });
    describe("search notes", function() {
        it("")
    });
    describe("delete notes", function() {

    });
    describe("edit notes", function() {

    });
})

