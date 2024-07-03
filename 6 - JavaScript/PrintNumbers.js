// Prompt the user to enter the starting number of the range
let start = prompt("Enter the starting number:");

// Convert the input to a number
start = Number(start);

// Prompt the user to enter the ending number of the range
let end = prompt("Enter the ending number:");

// Convert the input to a number
end = Number(end);

// Check if both start and end are valid numbers
if (!isNaN(start) && !isNaN(end) && start <= end) {
    // Iterate through the numbers in the range and print each number to the console
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
} else {
    console.log("Please enter valid numbers with the starting number less than or equal to the ending number.");
}