let enterUser = document.querySelector("#button_first_screen");
const startGame = document.querySelector("#button_second_screen");
const gameButton = document.querySelector("#button_game");
const againGame = document.querySelector("#button_play_again");

let showStartGame = document.querySelector(".pre_game")
let showLogin = document.querySelector(".insert_name")


let textUser = document.querySelector("#userName")

enterUser.addEventListener('click', (e)=>{
    e.preventDefault();
    if(textUser.value == ""){
        enterUser.disabled = true;
    } else {
        enterUser.disabled = false;
        showLogin.classList.remove(".insert_name");
        showLogin.classList.add(".insert_name-none")
    }
    console.log(enterUser)
} )

startGame.addEventListener('click', ()=>{

    setTimeout( () => {



    }, 10000)
} )

let clicks = 0;

gameButton.addEventListener('click', ()=>{
    clicks++;
    console.log (clicks)
    return clicks;
} )

againGame.addEventListener('click', ()=>{


} )

//--------------------TIME OUT GAME--------------------//


//--------------------LOCAL STORAGE--------------------//

let myStorage = window.localStorage

let rankingResults = []

myStorage.setItem("clicks", "" )