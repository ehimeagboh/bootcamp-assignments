
"use strict"

//test cases for NotesApplication
describe("NotesApplication", function() {
	var myNote;

	beforeEach(function() {
		myNote = new NotesApplication;
	});

	it("should store a new note in an array", function() {
		myNote.create(note_content);
		expect(typeof myNote.create).toEqual("array");
	});
})
describe("NotesApplication", function() {
  var myNote;
  var song;

  beforeEach(function() {
    myNote = new NotesApplication();
    song = new Song();
  });

  it("should store a new note in an array", function() {
    myNote.create(note_content);
    expect(typeof myNote.create).toEqual("array");

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
