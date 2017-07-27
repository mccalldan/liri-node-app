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







function myTweets() {
	var client = new Twitter(keys.twitterKeys);
	var params = {screen_name: 'nocomment919'};
	client.get('statuses/user_timeline',params, function(error, tweets, response) {
  	if(!error) /*throw error*/ {}
  		//console.log(tweets);  // The favorites. 
  		//console.log(response);  // Raw response object.
        /*for(var i=0; i < 20; i++) {
        if(tweets[i]) {
          console.log(tweets[i].text);*/
      console.log("--------My Tweets--------");
        tweets.forEach(function(obj) {
          for(var i = 0; i < 20; i++) {
        console.log("Time: " + obj.created_at);
        console.log("Tweet: " + obj.text);}
        });
      
      /*else { console.log(error);}*/
    
  

});

}

