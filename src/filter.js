"use strict";


const load = require ("./loader.js");


$(document).ready(function() {
var allartists = [];

	$("#filter").click(menuSelect);

	var artpick = $("#artistlist option:selected").val();
	var albpick = $("#albumlist option:selected").text();
	var artistinfo = $("artistinfo");
	var albumnames = $('.albuminfo');
		// this returns all text smashed together in array"
		console.log(artistinfo);

		// this works with albuminfo, but only for that class
	function menuSelect (){
		console.log('this is a thing', albumnames.html());
		if (artpick === 0){
			for (var i = 0; i < albumnames.length; i++) {
				var inneralbum = albumnames[i].innerHTML;
				var daddy = $(inneralbum).closest(".musicinfo")
					console.log('hello', inneralbum, albpick, daddy);
				if (inneralbum === albpick) {
					$(albumnames[i]).closest(".cards").addClass("active");
					$(albumnames[i]).closest(".cards").removeClass("inactive")
					console.log("good");
				} else {
					$(albumnames[i]).closest(".cards").addClass("inactive");
					$(albumnames[i]).closest(".cards").removeClass("active")
				}
			}	
		}	
		if (albpick === 0){
			for (var i = 0; i < artistinfo.length; i++) {
				var innerartist = artistinfo[i].innerHTML;
				var mommy = $(innerartist).closest(".musicinfo")
					console.log('hello', innerartist, artpick, mommy);
				if (innerartist === artpick) {
					$(artistinfo[i]).closest(".cards").addClass("active");
					$(artistinfo[i]).closest(".cards").removeClass("inactive")
					console.log("good");
				} else {
					$(artistinfo[i]).closest(".cards").addClass("inactive");
					$(artistinfo[i]).closest(".cards").removeClass("active")
				}
			}
		}
		



		// 	}
		// }
	}

});
console.log("filter");


// module.exports = menuSelect;