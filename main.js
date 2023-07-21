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

let username = "";


enterUser.addEventListener('click', ()=>{
    if(textUser.value === ""){
        enterUser.disabled;
    } else {
        username =textUser.value;
        showLogin.classList.add("insert_name-none");
        showStartGame.classList.remove("pre_game-none");
    }   
} )

let startTime;

startGame.addEventListener('click', ()=>{
    showStartGame.classList.add("pre_game-none");
    showGame.classList.remove("main_screen_game-none");
    startTime = setTimeout(()=>{
        showGame.classList.add("main_screen_game-none");
        showScore.classList.remove("score_screen-none");
        showScore.classList.add("score_screen");
        saveResult(username, clicks);
        updateHiresultList;
    },10000)
} )

let clicks = 0;


gameButton.addEventListener('click', ()=>{
    clicks++;
} ) 

function saveResult (username, result){
    const results = JSON.parse(localStorage.getItem("highResults") || "[]");
    results.push({ username, result });
    results.sort((a, b) => b.result - a.result);
    localStorage.setItem("highResults", JSON.stringify(results.slice(0, 4)));
}


function updateHiresultList() {
    const hiresultList = document.getElementById("hiresultList");
    hiresultList.innerHTML = "";
  
    const results = JSON.parse(localStorage.getItem("highResults") || "[]");
    results.forEach((entry, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${entry.username} - ${entry.result} clicks`;
      hiresultList.appendChild(listItem);
    });
  }




againGame.addEventListener('click', ()=>{
    showScore.classList.remove("score_screen");
    showScore.classList.add("score_screen-none");
} )


updateHiresultList();
//---------------------PHASE TWO-----------------------//




//--------------------LOCAL STORAGE--------------------//

