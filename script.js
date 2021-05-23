
var totalScore, roundScore, activePlayer, dice, playGame;

// toogle players

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("currentScore-0").textContent=0;
    document.getElementById("currentScore-1").textContent=0;

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
     
}

// reset

function newStart() {
    playGame = true;
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById("totalScorePlayer-0").textContent=0;
    document.getElementById("totalScorePlayer-1").textContent=0;
    document.getElementById("currentScore-0").textContent=0;
    document.getElementById("currentScore-1").textContent=0;

    document.querySelector(".diceImage").style.display = "none";   

    document.querySelector("#name-0").textContent = "Player 1"; 
    document.querySelector("#name-1").textContent = "Player 2"; 

    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

// roll dice

document.querySelector(".rollDice").addEventListener("click", function() {
    if (playGame) {
        var dice = Math.ceil(Math.random()*6);

        var diceElement = document.querySelector(".diceImage");
        diceElement.style.display = "block";
        diceElement.src = "img/" + dice + ".jpg";

        if (dice !== 1) {
            roundScore += dice;
            document.getElementById("currentScore-" + activePlayer).textContent=roundScore;
        }
        else {
            nextPlayer();
        }
    }
    
});

// add score to total score

document.querySelector(".holdScore").addEventListener("click", function(){
    if (playGame) {
        totalScore[activePlayer] += roundScore;
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent=totalScore[activePlayer];
        if(totalScore[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!"
            playGame = false;
        }
        else {
            nextPlayer();
        }
    }

});

// new game button

document.querySelector(".newGame").addEventListener("click", newStart);
