$(document).ready(function() {

"use strict";

	$.ajax({url:"songxhr.json"}).done(applyInfo);

	$("#more").click(function moreButton (){
		$.ajax({url:"songsxhr2.json"}).done(applyInfo);
	});

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

		}
	}

	var userAdds = {};
	var tune = document.getElementById("song");
 	var band = document.getElementById("artist");
 	var disc = document.getElementById("album");
	// var addButt = $("#addit");

	$("#addit").click(function(){
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


	$("#link-home").click(function(event){
		event.preventDefault();
		$("#list-view").addClass("visible");
		$("#list-view").removeClass("hidden");
		$("#add-view").addClass("hidden");
		$("#add-view").removeClass("visible");
	});

	$("#link-add").click(function(event){
		event.preventDefault();
		$("#add-view").addClass("visible");
		$("#add-view").removeClass("hidden");
		$("#list-view").addClass("hidden");
		$("#list-view").removeClass("visible");
	});

});


