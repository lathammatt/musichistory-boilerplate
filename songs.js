$(document).ready(function() {

"use strict";

	// var xhr = new XMLHttpRequest();

	// xhr.addEventListener("load", loadedFile);
	// xhr.addEventListener("failed", failedFile);
	// xhr.open("GET", "songxhr.json");
	// xhr.send();
	// 
	$.ajax({url:"songxhr.json"}).done(applyInfo);

	// function loadedFile(){
	// 	console.log("file loaded");
	// 	var firstList = JSON.parse(xhr.responseText);
	// 	applyInfo(firstList);
	// }

	// function failedFile(){
	// 	console.log("file failed");
	// }

	// var secondxhr = new XMLHttpRequest();
	// secondxhr.addEventListener("load", console.log("loaded"));
	// secondxhr.addEventListener("failed", failedFile);
	// secondxhr.open("GET", "songsxhr2.json");
	// secondxhr.send();

	$("#more").click(function moreButton (){
		$.ajax({url:"songsxhr2.json"}).done(applyInfo);
	});

	var songInfo = $("#songList");

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
			songInfo.append(newDiv);

			// var deleDiv = $("#card-" + [counter]);
			$("#card-" + [counter]).click(function deleteCard(event){
				var clickedbtn = event.target.id.split("-")[1];
				var cardtodelete = $("#cardwrapper-" + `${clickedbtn}`);
				songInfo.remove(cardtodelete);
			});

		}
	}

	var userAdds = {};
	var tune = $("#song");
	var band = $("#artist");
	var disc = $("#album");
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

	// var home = $("#link-home");
	// var add = $("#link-add");
	// var homeview = $("#list-view");
	// var addview = $("#add-view");

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


