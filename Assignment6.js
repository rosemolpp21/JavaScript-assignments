const divboard = document.getElementById("tictactoe-board");
let x = divboard.querySelectorAll(".gamekeys");
let k = 0;
const output = document.getElementById("output");
const startbutton = document.getElementById("start-game");
const mainimage = document.getElementById("main-image");
const quitgame = document.getElementById("quit-button");
let w = false;
startbutton.onclick = function () {
    mainimage.style.display = "none";
    startbutton.id = "quit-button";
    startbutton.textContent = "Game is on";
    divboard.style.display = "grid";
    document.getElementById("output").style.display = "block";
}
let successchance = [[1, 2, 3], [3, 5, 7], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 8, 9]];
x.forEach((value) => {
    value.addEventListener("click", function gamefunction() {
        if (value.className == "gamekeys") {
            k = k + 1;
            if (k % 2 === 0 && !w) {
                output.textContent = `player 2 made a move , now it's player 1's turn`;
                value.textContent = "x";
                value.className = "second-player-move";
                checkwinsecondplayer()
            }
            else if (k % 2 !== 0 && !w) {
                output.textContent = `player 1 made a move , now it's player 2's turn`;
                value.textContent = "o";
                value.className = "first-player-move";
                checkwinfirstplayer();
            }
        }
    });
})
function checkwinsecondplayer(){
    for (let i of successchance) {
        let firstvalue = document.getElementById(String(i[0]));
        let secondvalue = document.getElementById(String(i[1]));
        let thirdvalue = document.getElementById(String(i[2]));
        if (firstvalue.className == "second-player-move" && secondvalue.className == "second-player-move" && thirdvalue.className == "second-player-move") {
            output.textContent = "Game over !!🏆🏆🏆 Secondplayer wins the game🏆🏆🏆";
            w=true;
            gamerestart();
        }
    }
}
function checkwinfirstplayer(){
for (let i of successchance) {
    let firstvalue = document.getElementById(String(i[0]));
    let secondvalue = document.getElementById(String(i[1]));
    let thirdvalue = document.getElementById(String(i[2]));
    if (firstvalue.className == "first-player-move" && secondvalue.className == "first-player-move" && thirdvalue.className == "first-player-move") {
        output.textContent = "Game over !!🏆🏆🏆 Firstplayer wins the game🏆🏆🏆";
        w = true;
        gamerestart();
    }
    else if (k === 9 && !w) {
        output.textContent = `Draw`;
        gamerestart();
    }
}}
function gamerestart() {
    setTimeout(restartgame, 3000);
    function restartgame() {
        let i = 6
        setInterval(() => {
            output.textContent = `next game will start in ${i} seconds`;
            i--;
            if (i < 0) {
                window.location.reload();
            }
        }, 1000);
    }
}