var xhr = new XMLHttpRequest();

xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)
xhr.open("GET", "songxhr.json");
xhr.send();

function loadedFile(){
	console.log("file loaded");
	var firstList = JSON.parse(xhr.responseText);
	applyInfo(firstList);
};

function failedFile(){
	console.log("file failed");
};

var secondxhr = new XMLHttpRequest();
secondxhr.addEventListener("load", console.log("loaded"));
secondxhr.addEventListener("failed", failedFile);
secondxhr.open("GET", "songsxhr2.json");
secondxhr.send();

var moreButt = document.getElementById("more");
moreButt.addEventListener("click", moreButton);

function moreButton (){
	var secondList = JSON.parse(secondxhr.responseText);
	applyInfo(secondList)
};

var songInfo = document.getElementById("songList");

var counter = 0;

function applyInfo (object){
	console.log("object", object);
	for (var i = 0; i < object.songs.length; i++){
		counter++;
		var songbox = `<div class="cards"><ul><li><h2>${object.songs[i].title} </h2></li><li class='infolist'>${object.songs[i].artist}</li><li class='infolist'>${object.songs[i].album}</li><button id="card-${counter}">Delete</button></div>`;

		var newDiv = document.createElement('article');
		newDiv.innerHTML = songbox;

		var newAttr = document.createAttribute('id');
		newAttr.value = "cardwrapper-" + `${counter}`;
		newDiv.setAttributeNode(newAttr);
		songInfo.appendChild(newDiv);

		var deleDiv = document.getElementById("card-" + [counter]);
		deleDiv.addEventListener("click", function deleteCard(event){
			var clickedbtn = event.target.id.split("-")[1];
			var cardtodelete = document.getElementById("cardwrapper-" + `${clickedbtn}`);
			songInfo.removeChild(cardtodelete);
		});

	};
};

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
	console.log("obj", obj);
	music.push(obj);
	console.log("music", music);
	userAdds.songs = music;
	console.log("final", userAdds);
	tune.value = "";
	band.value = "";
	disc.value = "";
});

var home = document.getElementById("link-home");
var add = document.getElementById("link-add");





