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
	console.log("object", object);
	for (var i = 0; i < object.songs.length; i++){
		counter++;
		var songbox = `<div class="cards"><ul><li><h2>${object.songs[i].title} </h2></li><li class='artistinfo'>${object.songs[i].artist}</li><li class='albuminfo'>${object.songs[i].album}</li><button id="card-${counter}">Delete</button></div>`;

		var newDiv = document.createElement('article');
		newDiv.innerHTML = songbox;

		var newAttr = document.createAttribute('id');
		newAttr.value = "cardwrapper-" + `${counter}`;
		newDiv.setAttributeNode(newAttr);
		songInfo.appendChild(newDiv);

		var status = document.createAttribute('class');
		status.value = "active";
		status.value = "musicinfo"
		newDiv.setAttributeNode(status);

		var deleDiv = document.getElementById("card-" + [counter]);
		deleDiv.addEventListener("click", function deleteCard(event){
			var clickedbtn = event.target.id.split("-")[1];
			var cardtodelete = document.getElementById("cardwrapper-" + `${clickedbtn}`);
			songInfo.removeChild(cardtodelete);
		});

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


var userAdds = {};
var tune = document.getElementById("song");
var band = document.getElementById("artist");
var disc = document.getElementById("album");
var addButt = document.getElementById("addit");

// function userEntry(){
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
	console.log("adding", obj);
	applyInfo(userAdds);
});
});

// module.exports = userEntry;

console.log("loader");



