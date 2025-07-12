let randomNumber = Math.floor(Math.random() * 100) + 1;
let num_guessed = []
let total_chances = 10;
game = true;
while (game && total_chances > 0) {
    let userGuess = prompt("Guess a number between 1 and 100:");
    userGuess = Number(userGuess);

    num_guessed.push(userGuess);

    if (userGuess === randomNumber) {
        alert("Congratulations! You've guessed the number correctly.");
        game = false;
    } else if (userGuess < randomNumber) {
        alert("Too low! Try again.");
        total_chances--;
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
        total_chances--;
    } else {
        alert("Invalid input. Please enter a number.");
    }
    console.log(`Your guesses so far: ${num_guessed.join(", ")} and total chances left: ${total_chances}`);
}