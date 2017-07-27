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

    case "do-what-it-says":
    doWhatItSays();
    break;
}



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


function doWhatItSays(){

  command1 = process.argv[2];
  command2 = process.argv[3];

  fs.readFile('random.txt', 'utf8', command1, command2, function(err, data) {
      if(err) throw err;
      console.log(data.toString());

     var rand = data.toString().split(',');
     
     

    
    });
  }

function logData(data) {
    fs.appendFile('log.txt', JSON.stringify(data, null, 2) + '\n====================================================================================', function(err) {
      if(err) {
        console.log(err);
      }
    });
  }


