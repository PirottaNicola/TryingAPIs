var settings_get = {
	"async": true,
	"crossDomain": true,
	"url": "https://voicerss-text-to-speech.p.rapidapi.com/?r=0&c=mp3&f=8khz_8bit_mono&src=Hello%252C%20world!&hl=en-us",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com",
		"x-rapidapi-key": "bf213884453040f38b05d85abf2c81f6"
	}
}

$.ajax(settings_get).done(function (response) {
	console.log(response);
});


var settings_post = {
	"async": true,
	"crossDomain": true,
	"url": "https://voicerss-text-to-speech.p.rapidapi.com/",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com",
		"x-rapidapi-key": "bf213884453040f38b05d85abf2c81f6",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"c": "mp3",
		"r": "0",
		"f": "8khz_8bit_mono",
		"src": "Hello, world!",
		"hl": "en-us"
	}
}

$.ajax(settings_post).done(function (response) {
	console.log(response);
});