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
      console.log("--------My Tweets--------");
  		for(var i=0; i < 20; i++) {
  			if(tweets[i]) {
          console.log("=============================");
          console.log("Tweet:");
  				console.log(tweets[i].text);
          console.log("Time created:");
          console.log(tweets[i].created_at);
  			}
  		} 
	});
}



// Spotifying Songs

function spotifyThisSong(keyword) {

var keyword = process.argv[3];
var spotify = new Spotify({
  id: 'e86b36c6edf64299a90090662e191562',
  secret: '44c7505bd44f4f5eb222e5b2fda65131'
  });

    spotify.search({ type: 'track', query: keyword || 'The Sign Ace of Base' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

     if(data.tracks.items.length > 0) {
        var record = data.tracks.items[0];

        console.log(' ');
        console.log('================================');
        console.log('Artist: ' + record.artists[0].name);
        console.log('Name: ' + record.name);
        console.log('Link: ' + record.preview_url);
        console.log('Album: ' + record.album.name);
        console.log(' ');
       } 

      else {
        console.log('No song data found.');
      }
   });
}

// Movie Info

function movieThis(query) {

    var query = process.argv[3];

    request('http://www.omdbapi.com/?t=' + (query || 'Mr.Nobody') +'&tomatoes=true&apikey=40e9cece', function (error, response, info) {
      if (!error && response.statusCode == 200) {

       var movieData = JSON.parse(info);

       console.log(' ');
        console.log('================================');
        console.log('Title: ' + movieData.Title);
        console.log('Year: ' + movieData.Year);
        console.log('IMDB Rating: ' + movieData.imdbRating);
        console.log('Rotten Tomatoes Rating: ' + movieData.tomatoRating);
        console.log('Country: ' + movieData.Country);
        console.log('Language: ' + movieData.Language);
        console.log('Plot: ' + movieData.Plot);
        console.log('Actors: ' + movieData.Actors);
        console.log(' ');     
      }
    });
  };
  