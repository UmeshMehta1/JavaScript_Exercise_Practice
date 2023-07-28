//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Get a random integer from 1 to 10 inclusive

const num = Math.ceil(Math.random() * 10);
console.log(num);
const gNum = prompt('enter number between 1 and 10');
if (gNum == num) {
  console.log(`you guessed it right! the answer was ${num}`);
} else {
  console.log('Not Match ' + gNum);
}
