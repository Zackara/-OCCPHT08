//GRADE SCCORE Activity on day 6
// Prompt the user to enter a score

let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Initialize the grade variable
let grade;

// Determine the grade based on the score
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

// Print the grade to the console
console.log(`Your grade is: ${grade}`);