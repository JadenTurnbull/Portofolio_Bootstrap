var secret = Math.floor(Math.random() * 10) + 1;
var answer
var guess = parseInt(answer);
var active = true;
var play = document.getElementById("play");

play.addEventListener("click", startGame);

function reloadPage() {
    window.location.reload();
}

function startGame() {

    answer = prompt("Please guess the secret number (1-10)");

    while (active) {
        if (answer == secret) {
            alert("Correct!");
            active = false;
            reloadPage();
        } else if ((answer > secret) && (answer > 10)) {
            alert("Invalid number");
            answer = prompt("Please guess the secret number (1-10)");
        } else if ((answer < secret) && (answer < 1)) {
            alert("Invalid Number");
            answer = prompt("Please guess the secret number (1-10)");
        } else if (answer > secret) {
            alert("Sorry, " + answer + " is too high");
            answer = prompt("Please guess the secret number (1-10)");
        } else if (answer < secret) {
            alert("Sorry " + answer + " is too low");
            answer = prompt("Please guess the secret number (1-10)");
        }
    }
}