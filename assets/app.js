const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

fetch('https://rawg-video-games-database.p.rapidapi.com/games', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
