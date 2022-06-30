let rangame = Math.floor(Math.random() * 15000);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5814e714amshc645801d44cc617p1ed6f1jsn2e9dfd6680b9',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};
const apiKey = '30be8e40b680456686a128a81f97aec8';

const chosenOneTitle = document.getElementById('game-title');
const chosenGameImage = document.getElementById('game-image')
const chosenOneGenres = document.getElementById('genres');
const chosenOnePlatforms = document.getElementById('platforms');
const chosenOneRelease = document.getElementById('release-date');
const chosenOneStores = document.getElementById('stores');

const chosenOne = JSON.parse(localStorage.getItem('chosenOne')) || null;
console.log(chosenOne);

// const theGameData = JSON.stringify(chosenOne);
// console.log(theGameData);
// console.log(chosenOne.keys('slug'));
function generateGameDisplayHtml(event){
	chosenOneTitle.textContent = "";
	chosenGameImage.textContent = "";
	chosenOneGenres.textContent = "";
	chosenOnePlatforms.textContent = "";
	chosenOneRelease.textContent = "";
	chosenOneStores.textContent = "";

	const title = chosenOne.name;
	chosenOneTitle.textContent = title;

	const gameImage = chosenOne.background_image;
	chosenGameImage.src = gameImage;

	const genre = chosenOne.genres;
	const strGenre = JSON.stringify(genre)
	// console.log(object.values(genre));
	// genre.slice(0, 'end');
	// genre.JSON.stringify(genres[name:]);
	chosenOneGenres.textContent = "Genres: " + strGenre;

	const platforms = chosenOne.platforms;
	const strPlatforms = JSON.stringify(platforms)
	chosenOnePlatforms.textContent = "All Platforms: " + strPlatforms;

	const releaseDate = chosenOne.released;
	chosenOneRelease.textContent = "Release Date: " + releaseDate;

	const stores = chosenOne.stores;
	const strStores = JSON.stringify(stores)
	chosenOneStores.textContent = "Where To Buy: " + strStores;
	
	




	
// 	return `
// 	<div class="row">
// 		<div class="columns five">
// 			<img src="${gamedata.results.background_image}" alt="Box Art">
// 			${slug.name ? `<p><strong>Game Name:</strong> ${slug.name}</p>` : ''}
// 			${gamedata.background_image ? `<p><strong>Themes:</strong> ${gamedata.background_image}</p>` : ''}
// 			${gamedata.platform ? `<p><strong>Platform:</strong> ${gamedata.platform}</p>` : ''}
// 			${gamedata.developer ? `<p><strong>Developer:</strong> ${gamedata.developer}</p>` : ''}
// 			${gamedata.release_date ? `<p><strong>Release Date:</strong> ${gamedata.release_date}</p>` : ''}
// 		</div>
// `;
// generateGameDisplayHtml();
}
	// const get_game_btn = document.getElementById('get_game');
	const game_container = document.getElementById('gamehtml');

function getRandomGame(){
	return fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey, options)
		.then(Response => Response.json())
}

// function renderGame(game){
	const newInnerHTML = generateGameDisplayHtml();
	game_container.innerHTML = newInnerHTML;
	// newInnerHTML.textContent = "hello";
// }

function fetchAndDisplayGame(){

	getRandomGame()
		.then(game => {
			console.log(game)
			// {
			// 	"8894": {
			// 		data: {
			// 			box_art: 'https;??'
			// 			.charAt.apply.
			// 		}
			// 	}
			// }
			const gamedata = game[rangame].data
			console.log(game[rangame].data)
	
			renderGame(gamedata)
	
			})
}

// get_game_btn.addEventListener('click',fetchAndDisplayGame)	


// get chosen one from local storage

// if chosenOne is null
if(chosenOne === null){
	// get a random game
	fetchAndDisplayGame();
}else{
	// show it to the dom	
	// renderGame(chosenOne);
	

}

// get a random game