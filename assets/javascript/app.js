const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5814e714amshc645801d44cc617p1ed6f1jsn2e9dfd6680b9',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};
const apiKey = '30be8e40b680456686a128a81f97aec8';

fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey, options)
	.then(response => response.json())
	.then(response => console.log(response))
	
	.catch(err => console.error(err));