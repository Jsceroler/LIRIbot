require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const input = process.argv.slice(3).join();
var choice = process.argv[2];

//
switch (choice) {
    case "concert-this":
        concert(input);
        break;
    case "spotify-this-song":
        if (input) {
            spotifyThis(input);
        } else {
            spotifyThis("The Sign Ace of Base");
        }
        break;
    case "movie-this":
        if (input) {
            movie(input);
        } else {
            movie("Mr. Nobody");
        }
        break;
    case "do-what-it-says":
        evilDo();
        break;
    default:
        console.log("Try again.")
}
function concert(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        var songData = response.data[0];
        console.log(`
        \nVenue Name: ${songData.venue.name}
        \nVenue Location: ${songData.venue.city}, ${songData.venue.region}
        \nDate of Event: ${ moment(response.data[0].datetime).format("MM/DD/YYYY")}
        `);

    })
}

//Took a big to mess with spotify and learn about .env, but I got it. Wish I had done this for first proj.
function spotifyThis(song) {
    spotify.search({
        type: "track",
        query: song
    }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        console.log(
            `
            \nArtist: ${data.tracks.items[0].artists[0].name}
            \nSong: ${data.tracks.items[0].name} 
            \nLink: ${data.tracks.items[0].external_urls.spotify} 
            \nAlbum: ${data.tracks.items[0].album.name} 
            `)
    })
};

function movie(movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(`
            Title:  ${response.data.Title}
            Year:  ${ response.data.Year}
            IMDB Rating:  ${ response.data.imdbRating}
            Rotten Tomatoes Rating:  ${ response.data.Ratings[2].Value}
            Country:  ${ response.data.Country}
            Language:  ${ response.data.Language}
            Plot:  ${ response.data.Plot}
            Actors:  ${ response.data.Actors}
            `)
        })

}
//the evil do that I do do. Simple re-direct to random.txt
function evilDo() {
    fs.readFile("random.txt", "utf-8", function (err, data) {
        if (err) {
            return console.log(error);
        }
        var random = data.split(",");
        spotifyThis(random[1]);
    });

}