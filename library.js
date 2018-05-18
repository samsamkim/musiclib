
function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}
Library.prototype.addPlaylists = function(playlist){
  this.playlists.push(playlist);
};


function Playlist(name){
  this.name = name;
  this.songs = [];
  this.rating = 0;
  this.length = 0;

}

Playlist.prototype.addSongs = function(track){
  this.songs.push(track);
  playlist1.calculateRating();
  playlist1.calculateLength();
};



Playlist.prototype.calculateRating = function(){
  var totalrating = 0;
  this.songs.forEach(function(song){
      totalrating += song.rating;
    });
    return this.rating = totalrating/this.songs.length;
};

Playlist.prototype.calculateLength = function(){
  var totalLength = 0;
  this.songs.forEach(function(song){
      totalLength += song.length;
    });
    return this.length = totalLength;
};

// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks




function Track(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}


// library.prototype.playlists = function (playListName){
//   this.name = playListName;
// };

// console.log();
//so we need library (object) to have a subclass (playlist)
// Playlist objects can be added to an instance of a library



let rap = new Library("rap", "sam");
let playlist1 = new Playlist("playlist1");
let track1 = new Track("im not racist", 4, 5000);
let track2 = new Track("stan", 5, 10000);

playlist1.addSongs(track1);
playlist1.addSongs(track2);
rap.addPlaylists(playlist1);
// console.log(track1);

console.log(playlist1);

// console.log(playlist1);
// console.log(rap);
// console.log(rap)