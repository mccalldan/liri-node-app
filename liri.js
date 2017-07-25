var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'e86b36c6edf64299a90090662e191562',
  secret: '44c7505bd44f4f5eb222e5b2fda65131'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});