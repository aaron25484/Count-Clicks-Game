let enterUser = document.querySelector("#button_first_screen");
const startGame = document.querySelector("#button_second_screen");
const gameButton = document.querySelector("#button_game");
const againGame = document.querySelector("#button_play_again");
const watchOut = document.querySelector("#button_moving_second_screen");
const movingButton = document.querySelector("#button_moving_game");

let showLogin = document.querySelector(".insert_name");
let showRanking = document.querySelector(".ranking");
let showStartGame = document.querySelector(".pre_game-none");
let showGame = document.querySelector(".main_screen_game-none");
let showScore = document.querySelector(".score_screen-none");
let showMovingStart = document.querySelector(".pre_moving_game-none");
let showMovingGame = document.querySelector(".main_moving_screen_game-none")

let textScore = document.getElementById("your_score");
let textUser = document.querySelector("#userName");
let username = "";

let startTime;

let clicks = 0;

enterUser.addEventListener('click', ()=>{
    if(textUser.value === ""){
        enterUser.disabled;
    } else {
        username = textUser.value;
        showLogin.classList.add("insert_name-none");
        showStartGame.classList.add("pre_game-flex");
    }   
} )

startGame.addEventListener('click', ()=>{
    showStartGame.classList.remove("pre_game-flex");
    showStartGame.classList.add("pre_game-none");
    showGame.classList.remove("main_screen_game-none");
    showGame.classList.add("main_screen_game-flex");
    startTime = setTimeout(()=>{
        showGame.classList.add("main_screen_game-none");
        showGame.classList.remove("main_screen_game-flex");
        showScore.classList.remove("score_screen-none");
        showScore.classList.add("score_screen");
        saveResult(username, clicks);
        updateHiresultList;
    },10000)
} )

gameButton.addEventListener('click', ()=>{
    clicks++;
} ) 

againGame.addEventListener('click', ()=>{
    showScore.classList.remove("score_screen");
    showScore.classList.add("score_screen-none");
    showMovingStart.classList.add("pre_moving_game-flex");
} )

watchOut.addEventListener('click', ()=>{
    showMovingStart.classList.remove("pre_moving_game-flex");
    showMovingStart.classList.add("pre_moving_game-none");
    showMovingGame.classList.remove("main_moving_screen_game-none");
    showMovingGame.classList.add("main_moving_screen_game-flex");

    //METER FUNCION BOTON QUE SE MUEVE. TAMBIEN TENGO QUE CREARLA FUERA

    startTime = setTimeout(()=>{
        showMovingGame.classList.add("main_moving_screen_game-none");
        showMovingGame.classList.remove("main_moving_screen_game-flex");
        showScore.classList.remove("score_screen-none");
        showScore.classList.add("score_screen");
        saveResult(username, clicks);
        updateHiresultList;
    },10000)
})

movingButton.addEventListener('click', ()=>{
    moveButton;
    clicks++;
    
} ) 
console.log(moveButton)

function moveButton(){

const buttonWidth = Math.floor(math.random() * 100) +50;
const buttonHeight = Math.floor(math.random() * 100) +50;
const maxX = movingButton.width - buttonWidth;
const maxY = movingButton.height - buttonHeight;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

movingButton.style.width = buttonWidth + "px";
movingButton.style.height = buttonHeight + "px";
movingButton.style.top = randomY + "px";
movingButton.style.left = randomX + "px";

console.log(movingButton)
}

updateHiresultList();
//---------------------PHASE TWO-----------------------//


//----------------------SAVE INFORMATION------------------//

function saveResult (username, result){
    const results = JSON.parse(localStorage.getItem("highResults") || "[]");
    results.push({ username, result });
    results.sort((a, b) => b.result - a.result);
    localStorage.setItem("highResults", JSON.stringify(results.slice(0, 10)));
    textScore.textContent =  "You have made " + clicks + " clicks"
}

function updateHiresultList() {
    const hiresultList = document.getElementById("hiresultList");
    hiresultList.innerHTML = "";
    const results = JSON.parse(localStorage.getItem("highResults") || "[]");
    results.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.username} - ${entry.result} clicks`;
        hiresultList.appendChild(listItem);
    });
}