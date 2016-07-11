"use strict";


const load = require ("./loader.js");


$(document).ready(function() {
var allartists = [];

	$("#filter").click(menuSelect);

	function menuSelect (){
		var artpick = $("#artistlist option:selected").text();
		var albpick = $("#albumlist option:selected").text();
		var artistinfo = $('.artistinfo');
		var albuminfo = $('.albuminfo');
		console.log(artistinfo);

		console.log('this is a thing', artistinfo.html());

		for (var i = 0; i < artistinfo.length; i++) {
			var innerartist = artistinfo[i].innerHTML;
			var daddy = $(innerartist).closest(".musicinfo")
				console.log('hello', innerartist, artpick, albpick);
			if (innerartist === artpick) {
				$(artistinfo[i]).closest(".cards").addClass("active");
				$(artistinfo[i]).closest(".cards").removeClass("inactive")
				console.log("good");
			} else {
				$(artistinfo[i]).closest(".cards").addClass("inactive");
				$(artistinfo[i]).closest(".cards").removeClass("active")
				}
			}

		// console.log('this is a thing', albuminfo.html());
		// for (var i = 0; i < albuminfo.length; i++) {
		// 	var inneralbum = albuminfo[i].innerHTML;
		// 	var daddy = $(inneralbum).closest(".musicinfo")
		// 		console.log('hello', inneralbum, albpick, artpick);
		// 	if (inneralbum === albpick) {
		// 		$(albuminfo[i]).closest(".cards").addClass("active");
		// 		$(albuminfo[i]).closest(".cards").removeClass("inactive")
		// 		console.log("good");
		// 	} else {
		// 		$(albuminfo[i]).closest(".cards").addClass("inactive");
		// 		$(albuminfo[i]).closest(".cards").removeClass("active")
		// 		}
		// 	}
		


	}

});
console.log("filter");


// module.exports = menuSelect;