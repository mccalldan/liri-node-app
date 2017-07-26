// Node Packages
var keys = require("./key.js");
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
	var client = new Twitter(keys.twitterKeys);
	var params = {screen_name: 'nocomment919'};
	client.get('statuses/user_timeline',params, function(error, tweets, response) {
  	if(error) throw error;
  		//console.log(tweets);  // The favorites. 
  		//console.log(response);  // Raw response object.
  		for(var i=0; i < 10; i++) {
  			if(tweets[i]) {
  				console.log(tweets[i].text);
  			}
  		} 
	});
}



// Spotifying Songs

function spotifyThisSong() {


}

// Movie Info

function movieThis() {

/*inquirer.prompt([
    {
      type: "input",
      message: "What movie are you interested in?",
      name: "movie",
      
    }
    ])*/

    var movieName = process.argv[3];
    console.log(movieName);
 }