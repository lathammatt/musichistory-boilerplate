"use strict";


const load = require ("./loader.js");


$(document).ready(function() {
var allartists = [];

	$("#filter").click(menuSelect);

	function menuSelect (){
		var artpick = $("#artistlist option:selected").val();
		var albpick = $("#albumlist option:selected").text();
		var artistinfo = $(".musicinfo").map(function(){
			return $(this).text();
		});
		// this returns all text smashed together in array"
		console.log(artistinfo);

		var test = $('.albuminfo');
		// this works with albuminfo, but only for that class
		console.log('this is a thing', test.html());

		for (var i = 0; i < test.length; i++) {
			var whatever = test[i].innerHTML;
			var daddy = $(whatever).closest(".musicinfo")
				console.log('hello', whatever, albpick, daddy);
			if (whatever === albpick) {
				$(test[i]).closest(".cards").addClass("active");
				$(test[i]).closest(".cards").removeClass("inactive")
				console.log("good");
			} else {
				$(test[i]).closest(".cards").addClass("inactive");
				$(test[i]).closest(".cards").removeClass("active")
			}
		}
		// if (albpick) {}

		// // var albuminfo = $(".musicinfo").text();
		// var selection = $(".musicinfo").find(albpick);
		// console.log("select", selection);
		// for (var match in albuminfo){
		// 	console.log("artist", artpick, albuminfo);

		// 	if (match === artpick){
		// 		console.log("match");




		// 	}
		// }
	}

});
console.log("filter");


// module.exports = menuSelect;