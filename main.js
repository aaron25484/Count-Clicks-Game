let enterUser = document.querySelector("#button_first_screen");
const startGame = document.querySelector("#button_second_screen");
const gameButton = document.querySelector("#button_game");
const againGame = document.querySelector("#button_play_again");

let showLogin = document.querySelector(".insert_name");
let showRanking = document.querySelector(".ranking");
let showStartGame = document.querySelector(".pre_game-none");
let showGame = document.querySelector(".main_screen_game-none");
let showScore = document.querySelector(".score_screen-none");


let textUser = document.querySelector("#userName")


enterUser.addEventListener('click', ()=>{
    if(textUser.value === ""){
        enterUser.disabled;
    } else {
        
        showLogin.classList.add("insert_name-none");
        showStartGame.classList.remove("pre_game-none");
    }   
    console.log(enterUser)
} )

let startTime;

startGame.addEventListener('click', ()=>{
    showStartGame.classList.add("pre_game-none");
    showGame.classList.remove("main_screen_game-none");
    startTime = setTimeout(()=>{
        showGame.classList.add("main_screen_game-none");
        showScore.classList.remove("score_screen-none");
        showScore.classList.add("score_screen");
    },10000)
} )

let clicks;

gameButton.addEventListener('click', ()=>{
    clicks = 0;
    clicks++;
    console.log (clicks)
    return clicks;
} )

againGame.addEventListener('click', ()=>{
    showScore.classList.remove("score_screen");
    showScore.classList.add("score_screen-none");
} )


//---------------------PHASE TWO-----------------------//




//--------------------LOCAL STORAGE--------------------//

let myStorage = window.localStorage

let rankingResults = []

myStorage.setItem("name", "" )
myStorage.setItem("clicks", "" )