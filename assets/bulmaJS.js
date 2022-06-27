//base url
const base_url = "https://api.rawg.io/api/";
const APIkey = '5b7c4e0608b6468984fa007b7f2896e2'


function createCarousel() {
  
/* <section class="section">
      <div class="container is-clipped">
        <div id="slider"></div> */

/* <div class="card">
            <div class="card-image">
              <figure class="image is-16by9 is-covered">
                <img
                  src="https://www.denofgeek.com/wp-content/uploads/2019/12/halo-infinite.jpg?resize=768%2C432"
                  alt=""
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="title is-3">
                Halo Infinite
              </div>
              <div class="item__description">
                The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.
              </div>
            </div>
          </div> */

  // create carousel
  const sectionCarousel = $("<section>");
  // const sectionCarousel = createElement('section');
  
  sectionCarousel.attr('class', 'section');
  
  const divClass = $("<div>");
  divClass.attr('class', 'container is-clipped');
  
  const divId = $("<div>");
  divId.attr('id', 'slider');
  
  // create Cards
  const cardDiv = $("<div>");
  cardDiv.attr('class', 'card');
  
  const cardImg = $("<div>");
  cardImg.attr('class', 'card-image');
  
  // need to add game background image from API
  const figureCard = $("<img>").wrap("<figure></figure>");
  figureCard.attr('class', 'image is-16by9 is-covered');
  
  
  // need to add game title from API
  const contentDiv = $("<div>");
  contentDiv.attr('class', 'title is-3');
  
  // need to add game description from API
  const descriptionDiv = $("<div>");
  descriptionDiv.attr('class', 'item__description');
  
  
  sectionCarousel.append(divClass, divId, cardDiv, cardImg, figureCard, contentDiv, descriptionDiv);
  
  return sectionCarousel;
  
};

// Need a for loop to create 10 

$(function (){

  for (let index = 0; index < 10; index++) {
    
    const carousel = createCarousel();
    
  };
});


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


// async function APItest(){
//   const response = await fetch(`${base_url}${popular_games}`);
//   const data = await response.json();
//   console.log(data);
//   // data.results.forEach((result) => console.log(result.results));
// }

// APItest();








