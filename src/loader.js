"use strict";

$(document).ready(function() {

	$.ajax({url:"songxhr.json"}).done(applyInfo);

var moreButton = function (){
	$.ajax({url:"songsxhr2.json"}).done(applyInfo);
};

$("#more").click(moreButton);


var songInfo = document.getElementById("songList");

var counter = 0;

function applyInfo (object){
	for (var i = 0; i < object.songs.length; i++){
		counter++;
		var songbox = `<div class="cards"><ul><li><h2>${object.songs[i].title} </h2></li><li class='artistinfo infolist'>${object.songs[i].artist}</li><li class='albuminfo infolist'>${object.songs[i].album}</li><button id="card-${counter}">Delete</button></div>`;

		var newDiv = document.createElement('article');
		newDiv.innerHTML = songbox;

		var newAttr = document.createAttribute('id');
		newAttr.value = "cardwrapper-" + `${counter}`;
		newDiv.setAttributeNode(newAttr);
		songInfo.appendChild(newDiv);

		var status = document.createAttribute('class');
		status.value = "active";
		status.value = "musicinfo";
		newDiv.setAttributeNode(status);

		var deleDiv = document.getElementById("card-" + [counter]);
		deleDiv.addEventListener("click", function deleteCard(event){
			var clickedbtn = event.target.id.split("-")[1];
			var cardtodelete = document.getElementById("cardwrapper-" + `${clickedbtn}`);
			songInfo.removeChild(cardtodelete);
		});

		// ///////// Select Option Fill /////////

		var artistList = document.getElementById("artistlist");
		var aroption = document.createElement("option");
		aroption.text = `${object.songs[i].artist}`;
		aroption.value = `"${object.songs[i].artist}"`;

		artistList.appendChild(aroption);

		var albumList = document.getElementById("albumlist");
		var aloption = document.createElement("option");
		aloption.text = `${object.songs[i].album}`;
		aloption.value = `"${object.songs[i].album}"`;

		albumList.appendChild(aloption);

	}
}


// ////////// Add New Music Logic ////////////

var userAdds = {};
var tune = document.getElementById("song");
var band = document.getElementById("artist");
var disc = document.getElementById("album");
var addButt = document.getElementById("addit");

addButt.addEventListener("click", function(){
	var music = [];
	var obj = {};
	obj.title = tune.value;
	obj.artist = band.value;
	obj.album = disc.value;
	music.push(obj);
	userAdds.songs = music;
	tune.value = "";
	band.value = "";
	disc.value = "";
	applyInfo(userAdds);
});
});

////////////// Handlebars for genre checkbox///////

var genres = {
	tags: [
	{name: "Rock"},
	{name: "Pop"},
	{name: "Blues"}
]
};

var genres2 = {
	tags: [
	{name: "Classical"},
	{name: "Jazz"},
	{name: "Rap"}
]
};

var genreHTML = $("#genredata").html();

var genreTemplate = Handlebars.compile(genreHTML);

var genreOutput = genreTemplate(genres);
var genre2Output = genreTemplate(genres2);

$("#checks").append(genreOutput);
$("#checks2").append(genre2Output);


