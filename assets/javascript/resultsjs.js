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
// const storeLinks = document.getElementById('store-links');

const chosenOne = JSON.parse(localStorage.getItem('chosenOne')) || null;
console.log(chosenOne);


function generateGameDisplayHtml(event){
    chosenOneTitle.textContent = "";
    chosenGameImage.textContent = "";
    chosenOneGenres.textContent = "";
    chosenOnePlatforms.textContent = "";
    chosenOneRelease.textContent = "";
    chosenOneStores.textContent = "";
    // storeLinks.textContent = "";
    const title = chosenOne.name;
    chosenOneTitle.textContent = title;
    const gameImage = chosenOne.background_image;
    chosenGameImage.src = gameImage;
    const genres = chosenOne.genres;
    let genreLength = genres.length;
    let allGenres = "Genres: ";
    for (let i = 0; i < genreLength; i++) {
        allGenres += genres[i].name + ", ";
        chosenOneGenres.textContent = allGenres;
    }
    const platforms = chosenOne.platforms;
    // console.log(platforms);
    let platformLength = platforms.length;
    let allPlatforms = "All Platforms: ";
    for (let i = 0; i < platformLength; i++) {
        allPlatforms += platforms[i].platform.name + ", ";
        chosenOnePlatforms.textContent = allPlatforms;
    }
    const releaseDate = chosenOne.released;
    chosenOneRelease.textContent = "Release Date: " + releaseDate;
    const stores = chosenOne.stores;
    let storesLength = stores.length;
    let allStores = "Where to Play: ";
    for (let i = 0; i < storesLength; i++) {
        allStores += stores[i].store.name + ", ";
        chosenOneStores.textContent = allStores;
    }
    let wikiSearchTitle = chosenOne.name;
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiSearchTitle}&limit=1&namespace=0&format=json&origin=*`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data[3])
                const wikiLink = data[3];
                storeLinks.href = wikiLink;
            });
}
	
	const game_container = document.getElementById('gamehtml');

function getRandomGame(){
	return fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey, options)
		.then(Response => Response.json())
}


	const newInnerHTML = generateGameDisplayHtml();
	


function fetchAndDisplayGame(){

	getRandomGame()
		.then(game => {
			console.log(game)
			
			const gamedata = game[rangame].data
			console.log(game[rangame].data)
	
			renderGame(gamedata)
	
			})
}


// get chosen one from local storage

// if chosenOne is null
if(chosenOne === null){
	// get a random game
	fetchAndDisplayGame();
}else{
	// show it to the dom	
	// renderGame(chosenOne);
	

}
