"use strict";

var home = document.getElementById("link-home");
var add = document.getElementById("link-add");
var homeview = document.getElementById("list-view");
var addview = document.getElementById("add-view");

home.addEventListener("click", function(event){
	event.preventDefault();
	homeview.classList.add("visible");
	homeview.classList.remove("hidden");
	addview.classList.add("hidden");
	addview.classList.remove("visible");
});

add.addEventListener("click", function(event){
	event.preventDefault();
	addview.classList.add("visible");
	addview.classList.remove("hidden");
	homeview.classList.add("hidden");
	homeview.classList.remove("visible");

});