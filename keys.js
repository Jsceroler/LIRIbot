var keys = require("./keys.js");
console.log('this is  loaded');

exports.spotify = {
    id: ProcessingInstruction.env.SPOTIFY_ID,
    secret: ProcessingInstruction.env.SPOTIFY_SECRET
};

var spotify = new spotify(keys.spotify);