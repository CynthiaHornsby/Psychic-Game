//Sets up the random letter choices for the computer
var randomLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = randomLetters[Math.floor(Math.random() * randomLetters.length)];
var guessLog = [];


//Starting values for the number of wins, losses, and available guesses
var wins = 0;
var losses = 0;
var guesses = 8;


document.onkeyup = function(event) {

    //Logs what key the user has hit
    var userGuess = event.key;
    document.getElementById("answer").innerHTML = userGuess;

    if (randomLetters.indexOf(userGuess) > -1) {

        if (userGuess === computerChoice) {
            wins++;
            guesses = 8;
            guessLog.length = 0;
            computerChoice = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        }
        else if (userGuess !== computerChoice) {
            guesses--;
            guessLog.push(userGuess);
            if (guesses <= 0) {
                losses++;
                guesses = 8;
                guessLog.length = 0;
                computerChoice = randomLetters[Math.floor(Math.random() * randomLetters.length)];
                document.getElementById("letter").innerHTML = computerChoice
            }
        }
    }
    document.getElementById("letter").innerHTML = computerChoice
    document.getElementById("span1").innerHTML = wins;
    document.getElementById("span2").innerHTML = losses;
    document.getElementById("span3").innerHTML = guesses;
    document.getElementById("guesslog").innerHTML = guessLog
}
