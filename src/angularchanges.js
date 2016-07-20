"use strict";

var app = angular.module("musicApp", []);

app.controller("selectApp",function($scope){
	console.log("scopin",$scope);
	$scope.selectData = [
    {
      title: "The Logical Song",
      artist: "Supertramp",
      album: "Breakfast in America"
    },
    {
      title: "Another Brick in the Wall",
      artist: "Pink Floyd",
      album: "The Wall"
    },
    {
      title: "Legs",
      artist: "ZZ Top",
      album: "Eliminator"
    }
  ];

});

// module.exports=app;