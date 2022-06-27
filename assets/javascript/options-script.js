
const startGameButton = document.getElementById('start-btn');
const timerEl = document.getElementById('timer');
const welcomeH3 = document.getElementById('heading-title');


const questionSectionEl = document.getElementById('section-question');
// const correctH3 = document.getElementById('correct');
// const wrongH3 = document.getElementById('wrong');
let questionTitleEl = document.getElementById('question-title');
let questionChoices = document.getElementById('question-choices');
let answerChoiceLi = document.getElementById('question-choice');

let queryParams = "";
let baseUrl = 'https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey
let tagsParams = [];
    
//show timer, timer starts when start button clicked, hide other elements
startGameButton.addEventListener('click', function(event){
    // timerEl.classList.remove('hide');
    startGameButton.classList.add('hide');
    questionTitleEl.classList.remove('hide');
    questionSectionEl.classList.remove('hide');
    

    
    // startTimer();
    renderQuestions(0);
});


//creates the loops for the questions objects/arrays
function renderQuestions(questionIndex){
    welcomeH3.classList.add('hide');
    // get the question
    const question = questions[questionIndex]
    // create the structure
    //set question title
    questionTitleEl.textContent = question.title;
    
    //set the choices
    const choices = question.choices;
    questionChoices.textContent = "";

    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];
        
        const li = document.createElement('li');
        
        const button = document.createElement('button');

        button.setAttribute('class', 'question-choice');
        button.textContent = choice.title;



        button.addEventListener('click', function(event){
            if(choice.title === "Playstation"){
                queryParams += "&platforms=18";

            }
            if(choice.title === "Xbox"){
                queryParams += "&platforms=186";

                    
            
            }
            
            if(choice.title === "PC (The Master Race)"){
                queryParams += "&platforms=4";

              
            }


            if(choice.title === "Yes, im lacking companionship"){
                tagsParams.push("multiplayer");
            
            }


            if(choice.title === "No thanks, i like being a loner..."){
                tagsParams.push("singleplayer");

            }


            
            if(choice.title === "PEW PEW, lets get some!"){
                tagsParams.push("looter shooter", "third-person-shooter", "first-person-shooter");
                // fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey)
                //     .then(response => response.json())
                //     .then(data  => {
                        
                    //     const ShooterGames = data.results.filter(function(game){
                    //         const ShooterGamesIndex = game.tags.findIndex(function(tag){
                    //             return tag.slug === 'looter shooter', 'third-person-shooter' || 'first-person-shooter' })
                                
                                
                    //         return ShooterGamesIndex !== -1;

                            
                    //     })

                    //     console.log(ShooterGames)
                    // })
            }


            if(choice.title === "Guns are bad mmkay"){
                tagsParams.push("medieval", "magic", "mythology", "combat", "hack-and-slash");
                // fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey)
                //     .then(response => response.json())
                //     .then(data  => {
                        
                //         const nonShooterGames = data.results.filter(function(game){
                //             const nonShooterGamesIndex = game.tags.findIndex(function(tag){
                //                 return tag.slug === 'medieval' || 'magic' || 'mythology' || 'combat' || 'hack-and-slash'})
                                
                                
                //             return nonShooterGamesIndex !== -1;

                            
                //         })

                //         console.log(nonShooterGames)
                //     })
            }

            if(choice.title === "Im Going on an Adventure!"){
                tagsParams.push('rpg', 'story rich', 'fantasy', 'sandbox', 'role-playing', 'open world', 'lore rich');

                // fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey)
                //     .then(response => response.json())
                //     .then(data  => {
                        
                //         const adventureGames = data.results.filter(function(game){
                //             const adventureGamesIndex = game.tags.findIndex(function(tag){
                //                 return tag.slug === 'rpg', 'story rich', 'fantasy', 'sandbox', 'role-playing', 'open world', 'lore rich'})
                                
                                
                //             return adventureGamesIndex !== -1;

                            
                //         })

                //         console.log(adventureGames)
                //     })
            }

            if(choice.title === "AINT NOBODY GOT TIME FOR DAT"){
                tagsParams.push('FPS', 'funny', 'action', 'horror', 'zombies');
                // fetch('https://rawg-video-games-database.p.rapidapi.com/games?page_size=300&key=' + apiKey)
                //     .then(response => response.json())
                //     .then(data  => {
                        
                //         const nonAdventureGames = data.results.filter(function(game){
                //             const nonAdventureGamesIndex = game.tags.findIndex(function(tag){
                //                 return tag.slug === 'FPS', 'funny', 'action', 'horror', 'zombies'})
                                
                                
                //             return nonAdventureGamesIndex !== -1;

                            
                //         })

                //         console.log(nonAdventureGames)
                //     })
            }

            





            const nextQuestionIndex = questionIndex + 1;

            if(nextQuestionIndex >= questions.length){
                const url = baseUrl + queryParams + `&tags=${tagsParams.join(",")}`;
                fetch(url, options)
                    .then(response => response.json())
                    .then(data  => {
                        
                            
                        console.log(data.results);


                        /// get random game from results

                        // call a renderGame()
renderGame(randomGame)

                        
                    })

                return;
                // return gameOver()

                // go to/redirect to results page
                
            }


            //move on to next question in index
            renderQuestions(nextQuestionIndex);


        });
        
        li.appendChild(button);
        
        questionChoices.appendChild(li);
     
    }
    
      
}




function renderGame(game){


}