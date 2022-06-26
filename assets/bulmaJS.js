bulmaCarousel.attach('#slider', {
  slidesToScroll: 1,
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
});


//base url
const base_url = "https://api.rawg.io/api/";
const APIkey = '5b7c4e0608b6468984fa007b7f2896e2'



// document.addEventListener('DOMContentLoaded', function(){
// function getGames(games){
// fetch(`${base_url}games?page_size=1&search=call of duty modern warfare&key=${APIkey}`)
// .then(response => response.json()

// )}
// }, false);


//getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the day
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    if (day == 0) {
      console.log(`07`);
      return `07`;
    }
    console.log(`0${day}`);
    return `0${day}`;
  } else {
    console.log(day);
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?key=${APIkey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;

//GAME DETAILS
const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${APIkey}`;


async function APItest(){
  const response = await fetch(`${base_url}${popular_games}`);
  const data = await response.json();
  console.log(data);
  // data.results.forEach((result) => console.log(result.results));
}

APItest();










