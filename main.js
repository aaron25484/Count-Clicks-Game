let enterUser = document.querySelector("#button_first_screen");
const startGame = document.querySelector("#button_second_screen");
const gameButton = document.querySelector("#button_game");
const againGame = document.querySelector("#button_play_again");
const watchOut = document.querySelector("#button_moving_second_screen");
const movingButton = document.querySelector("#button_moving_game");
const backLogin = document.querySelector("#button_back_login");

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

//------------------------------LOGIN SCREEN--------------------------------//

enterUser.addEventListener('click', ()=>{
    if(textUser.value === ""){
        enterUser.disabled;
    } else {
        username = textUser.value;
        showLogin.classList.add("insert_name-none");
        showStartGame.classList.add("pre_game-flex");
    }   
} )

//------------------------------PRE START GAME--------------------------------//

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

//------------------------------GAME BUTTON SCREEN--------------------------------//

gameButton.addEventListener('click', ()=>{
    clicks++;
} ) 

//--------------------------------SCORE SCREEN--------------------------------//

againGame.addEventListener('click', ()=>{
    showScore.classList.remove("score_screen");
    showScore.classList.add("score_screen-none");
    showMovingStart.classList.add("pre_moving_game-flex");
} )

backLogin.addEventListener('click', ()=>{
    showLogin.classList.add("insert_name");
    showLogin.classList.remove("insert_name-none");
    showScore.classList.remove("score_screen");
    showScore.classList.add("score_screen-none");
    if(textUser.value !== ""){
        textUser.value = "";
    }
})

//------------------------------PRE MOVING SCREEN--------------------------------//

watchOut.addEventListener('click', ()=>{
    showMovingStart.classList.remove("pre_moving_game-flex");
    showMovingStart.classList.add("pre_moving_game-none");
    showMovingGame.classList.remove("main_moving_screen_game-none");
    showMovingGame.classList.add("main_moving_screen_game-flex");

    startTime = setTimeout(()=>{
        showMovingGame.classList.add("main_moving_screen_game-none");
        showMovingGame.classList.remove("main_moving_screen_game-flex");
        showScore.classList.remove("score_screen-none");
        showScore.classList.add("score_screen");
        saveResult(username, clicks);
        updateHiresultList;
    },10000)
})

//------------------------------MOVING GAME SCREEN--------------------------------//

movingButton.addEventListener('click', ()=>{
    
    let num = randomNumber(15, 175);
    let num1 = randomNumber(10, 175);
    let num2 = randomNumber(75, 150)
    let num3 = randomNumber(75, 150)
    movingButton.style.left = `${num}px`;
    movingButton.style.top = `${num1}px`;
    movingButton.style.width = `${num2}px`;
    movingButton.style.height = `${num3}px`;
    console.log(num, num1, num2, num3)
    // moveButton();
    clicks++;
    
} ) 

function randomNumber (min,max){
    return Math.floor(Math.random() * (max-min +1)) +min;
}

updateHiresultList();


//---------------------------------SAVE INFORMATION----------------------------//

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
    results.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.username} - ${entry.result} clicks`;
        hiresultList.appendChild(listItem);
    });
}