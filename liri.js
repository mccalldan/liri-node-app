// Node Packages

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var inquirer = require("inquirer");


var action = process.argv[2];

switch (action) {
	case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;
}


// Grabbing Tweets

function myTweets() {


}



// Spotifying Songs

function spotifyThisSong() {


}

// Movie Info

function movieThis() {

inquirer.prompt([
    {
      type: "input",
      message: "What movie are you interested in?",
      name: "movie",
      
    }
    ])
 }