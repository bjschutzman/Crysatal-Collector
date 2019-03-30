// Global Variables
// ______________________________________________________

$(document).ready(function(){

var randomNumber = Math.floor(Math.random() * 120 + 19);
$("#randomNumber").html(randomNumber);

var totalScore = 0;
var wins = 0;
var losses = 0;


var crystalOne = Math.floor(Math.random() * 12 + 1);
var crystalTwo  = Math.floor(Math.random() * 12 + 1);
var crystalThree = Math.floor(Math.random() * 12 + 1);
var crystalFour = Math.floor(Math.random() * 12 + 1);









// Functions
// ______________________________________________________

function reset(){
    $("#randomNumber").html(randomNumber);
    crystalOne = Math.floor(Math.random() * 12 + 1);
    crystalTwo = Math.floor(Math.random() * 12 + 1);
    crystalThree = Math.floor(Math.random() * 12 + 1);
    crystalFour = Math.floor(Math.random() * 12 + 1);
    totalScore = 0
    $("#yourScoreIs").html(totalScore);

    // testing
    console.log(randomNumber);
}

function winner(){
    alert("Winner!!!");
    wins++;
    $("#winsCount").html(wins);
    reset();
}

function loser(){
    alert("Loser!!!");
    losses++;
    $("#lossCount").html(losses);
    reset();
}

$("#crystal1").on("click", function() {
    totalScore += crystalOne;
    $("#yourScoreIs").html(totalScore);
    updateScore();


    // testing and debugging
    console.log(totalScore);
});

$("#crystal2").on("click", function() {
    totalScore += crystalTwo;
    $("#yourScoreIs").html(totalScore);
    updateScore();


    // testing and debugging
    console.log(totalScore);
});

$("#crystal3").on("click", function() {
    totalScore += crystalThree;
    $("#yourScoreIs").html(totalScore);
    updateScore();


    // testing and debugging
    console.log(totalScore);
});

$("#crystal4").on("click", function() {
    totalScore += crystalFour;
    $("#yourScoreIs").html(totalScore);
    updateScore();


    // testing and debugging
    console.log(totalScore);
});


function updateScore(){
if(totalScore === randomNumber){
    winner();
    randomNumber = Math.floor(Math.random() * 120 + 19);
    reset();
}

else if (totalScore > randomNumber){
    loser();
    randomNumber = Math.floor(Math.random() * 120 + 19);
    reset();
}

}



});