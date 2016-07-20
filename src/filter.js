"use strict";


// const load = require ("./loader.js");


$(document).ready(function() {

	$("#filter").click(menuSelect);

	function menuSelect (){
		var artpick = $("#artistlist option:selected").text();
		var albpick = $("#albumlist option:selected").text();
		var artistinfo = $('.artistinfo');
		var albuminfo = $('.albuminfo');
		// var infolist = $('.infolist');

		if (artpick !== "All Artists" && albpick === "All Albums"){

			for (var i = 0; i < artistinfo.length; i++) {
				var innerartist = artistinfo[i].innerHTML;
				// var daddy = $(innerartist).closest(".musicinfo")
				if (innerartist === artpick) {
					$(artistinfo[i]).closest(".cards").addClass("active");
					$(artistinfo[i]).closest(".cards").removeClass("inactive");
				} else {
					$(artistinfo[i]).closest(".cards").addClass("inactive");
					$(artistinfo[i]).closest(".cards").removeClass("active");
					}
				}
		} else if (artpick === "All Artists" && albpick !== "All Albums"){
			for (var j = 0; j < albuminfo.length; j++) {
				var inneralbum = albuminfo[j].innerHTML;
				// var mommy = $(inneralbum).closest(".musicinfo")
				if (inneralbum === albpick) {
					$(albuminfo[j]).closest(".cards").addClass("active");
					$(albuminfo[j]).closest(".cards").removeClass("inactive");
				} else {
					$(albuminfo[j]).closest(".cards").addClass("inactive");
					$(albuminfo[j]).closest(".cards").removeClass("active");
					}
				}			
		} else {}

	}

});
