"use strict";

const load = require("./loader");
const view = require("./pageview");
const filter = require("./filter");

let MusicPage = {
	load,
	view,
	filter
};


module.exports = MusicPage;

console.log("main");