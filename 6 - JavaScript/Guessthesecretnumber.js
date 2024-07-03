// Declare a variable named secretNumber and assign it a random integer between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Declare a variable named attempts and set it to 0
let attempts = 0;

// Declare a variable named guessedNumber to store the player's guesses
let guessedNumber;

// Display a welcome message to the player
console.log("Welcome to the Guess the Secret Number game!");

// Start a do-while loop to repeatedly ask the player for their guess until they guess the correct number
do {
    // Increment the attempts variable by 1
    attempts++;

    // Prompt the player to enter their guess
    guessedNumber = Number(prompt("Enter your guess (between 1 and 10):"));

    // Check if the guessedNumber is lower than the secretNumber
    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } 
    // Check if the guessedNumber is higher than the secretNumber
    else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } 
    // Handle the case when the guessedNumber matches the secretNumber
    else {
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
        console.log(`It took you ${attempts} attempts.`);
    }
} while (guessedNumber !== secretNumber);

// End the game
console.log("Game over. Thanks for playing!");