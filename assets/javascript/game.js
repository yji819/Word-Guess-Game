

var names = [ "Brock", "Misty", "Surge", "Erika", "Koga", "Sabrina", "Blaine", "Giovanni", "Lorelei", "Bruno", "Agatha", "Lance","Red", "Blue", "Yellow"];
var remainingGuess = 8;
var remainingLetters = [];
var curWord = [];
var won = 0;
var lost = 0;
var word = document.getElementById("generatedWord");
var randomNames = names[Math.floor(Math.random() * names.length)];

var remainGuess = document.getElementById("remaGuess");
remainGuess.textContent = remainingGuess;
var numWins = document.getElementById("wins");
numWins.textContent = won;
var numLost = document.getElementById("losses");
numLost.textContent = lost;



for(
    var i = 0; i < randomNames.length; i++) {
        remainingLetters.push("_");
    }
word.textContent = remainingLetters;

