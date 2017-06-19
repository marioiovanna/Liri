
// Initialing node JS
console.log('');
console.log('I\'m Here');
console.log('');

// grab user input
var input = process.argv[2];

// USER TWITTER
if (input === 'my-tweets') {

    console.log('Your TWEETS');

    var Twitter = require('twitter');
    var keys = require('./keys.js');
// console.log(keys);
    var getTweet = new Twitter(keys);
    var param = {
        q: 'lirimariova',
        count: 20
    };
    getTweet.get('statuses/user_timeline', param, gotData);
    function gotData(error, tweets, response) {
        if (error) {
            throw error;
        }
        if (!error) {
            // console.log(tweets)
        }
        for (var i = 0; i < tweets.length; i++) {
            console.log('---------------------');
            console.log('');
            console.log(' * ' + tweets[i].text);
            console.log('');
            console.log('---------------------');
        }
    }
}

// SONG SPOTIFY
if (input === 'spotify-this-song') {

    console.log('Your Song...');
    console.log('');

    var song = process.argv[3];

    // var fs = require("fs");
    //
    // fs.readFile('random.txt', 'utf8', function (error, data) {
    //
    //     console.log(data)
    // });

// } else if (input === 'spotify-this-song') {

    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: '67d8f0f5ae5044e7a95b4bc90b238056',
        secret: 'a2c8aff303f04c90bebee25247e403e2'
    });

    spotify.search({type: 'track', query: song}, function (err, data) {
        if (err) {
            console.log('Error occurred, couldn\'t find that SONG... try again');
            return;
        }
        // console.log(JSON.stringify(data.tracks.items, null, 2));
        // console.log(request);
        console.log('Artist : ' + data.tracks.items[1].album.artists[0].name);
        console.log('Song\'s name: ' + data.tracks.items[1].name);
        console.log('Album name: ' + data.tracks.items[1].album.name);
        console.log('Sample: ' + data.tracks.items[1].preview_url)
    });
}

// USER MOVIE
else if (input === 'movie-this') {

    console.log('Your MOVIE ...');
    console.log('');

    var request = require('request');
    var movie = process.argv[3];

    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {

        if (!error && response.statusCode === 200) {

            // console.log(JSON.parse(body, null, 2));

            var dataBody = JSON.parse(body);

            // console.log(dataBody);
            // console.log('');
            console.log('Title: ' + dataBody.Title);
            console.log('Year: ' + dataBody.Year);
            console.log('Rated: ' + dataBody.Rated);
            console.log('Country: ' + dataBody.Country);
            console.log('Language: ' + dataBody.Language);
            console.log('Plot: ' + dataBody.Plot);
            console.log('Actors: ' + dataBody.Actors);
        }
    });
}

// USER DEFAULT
else if (input === 'do-what-it-says') {

    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function (error, data) {

        var dataArr = data.split(",");
    console.log(dataArr);

    for (var i = 0; i < dataArr.length; i++)

        console.log(i)

    });
}
//
// else if (input === '') {
//     .type(node liri^@)
// }