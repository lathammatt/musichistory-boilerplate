"use strict";

$(document).ready(function() {


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