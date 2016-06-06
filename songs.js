var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.unshift("Jeremy > by Pearl Jam on the album Ten");

songs.push("Stairway to Heaven > by Led Zeppelin on the album Led Zeppelin IV");


for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\*/g, '');
	songs[i] = songs[i].replace(/\(/g, '');
	songs[i] = songs[i].replace(/@/g, '');
	songs[i] = songs[i].replace(/!/g, '');
	songs[i] = songs[i].replace(/>/g, '-');
};

console.log(songs);

var songName = [];
var songArtist = []
for (var i = 0; i < songs.length; i++) {
	 songName.push(songs[i].split(" - by "));
	 songArtist.push(songName[i][1].split(" on the album "));

}

console.log("names", songName);
console.log("artist", songArtist);


var songInfo = document.getElementById("songList");


for (var i = 0; i < songArtist.length; i++) {
	songInfo.innerHTML += "<div>" + "<ul>" + "<li>" + "<h2>" + `${songName[i][0]}` + "</h2>" + "</li>" + "<li class='infolist'>" + `${songArtist[i][0]}` + "</li>" + "<li class='infolist'>" + `${songArtist[i][1]}` + "</li>";
}








