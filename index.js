// variables 

let currRabitTile;
let currPlantTile;

let score = 0;
let gameOver = false;

// when page loads
window.onload = function () {
    
    setGame(); // start game
}

function setGame() {
    // setup of the grid for thr game board in html

    for (let i = 0; i < 9; ++i) {
        //< my 9 divs will be created and i'm going to access fro the id wethe rit contain picture or rabbit for evaluation
        let tile = document.createElement("div");
        tile.id = i.toString();   // assigning i=html id vlue to each div element created
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setRabbit, 1000); // 1sec
    setInterval(setPlant, 1000);
}


function getRandomTile() {
    // math.randomm --> (0-1) * 9 =(0-9)  --> round down to (0-8) integers now i have random set of numbers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setRabbit() {

    // clearing condition
    if (gameOver) {
        return;
    }

    if (currRabitTile) {
        currRabitTile.innerHTML = ""; // setting an empty string so that 2 rabbits cant pop at the same time

    }


    let rabbit = document.createElement("img"); // an image tag is created
    rabbit.src = "./rabbit.jpg";

    // random pacement

    let num = getRandomTile();

    if (currPlantTile && currPlantTile.id == num) {
        return;
    }

    currRabitTile = document.getElementById(num);
    currRabitTile.appendChild(rabbit);
}


function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./pitcherplant.jpg";

    let num = getRandomTile();
    if (currRabitTile && currRabitTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant); // this will bring the  html element on screen

}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currRabitTile) {
        score += 20;
        document.getElementById("score").innerText = score.toString(); // update score in real time

    }
    else if (this == currPlantTile) { 
        document.getElementById("score").innerText = score.toString() + "GAME OVER "  + " refresh window to replay" ; // last score 
        gameOver = true;
    }
}
