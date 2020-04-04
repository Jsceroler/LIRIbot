#Liri-bot
***
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
***
#Commands
<ul>
<li>concert-this</li>
<li>spotify-this-song</li>
<li>movie-this</li>
<li>do-what-it-says</li>
</ul>
***

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>


4. `node liri.js do-what-it-says`

  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

***

Concert-this

![Concert-this](https://media.giphy.com/media/SWcNV5jvgImwlR4Bqb/giphy.gif)

Spotify-this

![Spotify-this](https://media.giphy.com/media/SVMro5EOFFvF6FXVeu/giphy.gif)

Movie-this

![Spotify-this](https://media.giphy.com/media/UX59PnzGK0ZTDz3os4/giphy.gif)

do-what-it-says

![Do-what-it-says](https://media.giphy.com/media/hpWvo5VlQP5xX9HTLc/giphy.gif)
***
I figured this homework was a big more about learning how to make a decent README file, so I took a bit of time to learn about it. Took example from the homework description and added my own flavor to it.
***
[My GitHub](https://github.com/Jsceroler?tab=repositories)