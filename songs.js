var xhr = new XMLHttpRequest();

xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)
console.log("response", typeof xhr.responseText);

xhr.open("GET", "songxhr.json");

xhr.send();

function loadedFile(){
	console.log("file loaded");
	var firstList = JSON.parse(xhr.responseText);
	// console.log(typeof songs, songs);
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
}

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// songs.unshift("Jeremy > by Pearl Jam on the album Ten");

// songs.push("Stairway to Heaven > by Led Zeppelin on the album Led Zeppelin IV");


// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/\*/g, '');
// 	songs[i] = songs[i].replace(/\(/g, '');
// 	songs[i] = songs[i].replace(/@/g, '');
// 	songs[i] = songs[i].replace(/!/g, '');
// 	songs[i] = songs[i].replace(/>/g, '-');
// };

// console.log(songs);

// var songName = [];
// var songArtist = []
// for (var i = 0; i < songs.length; i++) {
// 	 songName.push(songs[i].split(" - by "));
// 	 songArtist.push(songName[i][1].split(" on the album "));

// }

// console.log("names", songName);
// console.log("artist", songArtist);


var songInfo = document.getElementById("songList");


// for (var i = 0; i < songArtist.length; i++) {
// 	songInfo.innerHTML += "<div>" + "<ul>" + "<li>" + "<h2>" + `${songName[i][0]}` + "</h2>" + "</li>" + "<li class='infolist'>" + `${songArtist[i][0]}` + "</li>" + "<li class='infolist'>" + `${songArtist[i][1]}` + "</li>" + "</div>";
// }

var counter = 0;

//read from xhr
//loop over results and add to music list
// function createDIV(object)
function applyInfo (object){
	// var songs = JSON.parse(xhr.responseText);
	console.log(typeof object, object);
	for (var i = 0; i < object.songs.length; i++){
		counter++;
		var songbox = `<div class="cards"><ul><li><h2>${object.songs[i].title} </h2></li><li class='infolist'>${object.songs[i].artist}</li><li class='infolist'>${object.songs[i].album}</li><button id="card-${counter}">Delete</button></div>`;
		// var songbox = document.createElement('div');
		// songbox.setAttribute("id", "card-" + [counter]);
		// var songData = document.getElementById("card-" + `${counter}`);
		// var songData = document.createTextNode(
		// songInfo.innerHTML += "<ul>" + "<li>" + "<h2>" + `${songName[i][0]}` + "</h2>" + "</li>" + "<li class='infolist'>" + `${songArtist[i][0]}` + "</li>" + "<li class='infolist'>" + `${songArtist[i][1]}` + "</li>";
		
		// songbox.appendChild(songData);
		console.log("test", i, object.songs[i].album);
		console.log("test", songbox);

		var newDiv = document.createElement('article');
		newDiv.innerHTML = songbox;

		// var deleteButton = document.createElement('button');
		// deleteButton.setAttribute("id", "delete-" + [counter]);
		// var delText = document.createTextNode("Delete");
		// deleteButton.appendChild(delText);
		// newDiv.appendChild(deleteButton);

		var newAttr = document.createAttribute('id');
		newAttr.value = "cardwrapper-" + `${counter}`;
		newDiv.setAttributeNode(newAttr);
		songInfo.appendChild(newDiv);
		console.log("test2", newAttr);

		var deleDiv = document.getElementById("card-" + [counter]);
			console.log("testbutton", deleDiv);	
		deleDiv.addEventListener("click", function deleteCard(event){
			var clickedbtn = event.target.id.split("-")[1];
			var cardtodelete = document.getElementById("cardwrapper-" + `${clickedbtn}`);
			console.log("clicked", clickedbtn, cardtodelete);
			songInfo.removeChild(cardtodelete);
	} );
	// songInfo.innerHTML += songbox;
		console.log("test", object);


};
};






