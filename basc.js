// let value = 40;
// function a() {
//   document.write(value);
// }
// a();

//global variable inside the function
// function x() {
//   window.value = 60;
// }

// function y() {
//   alert(window.value);
//   document.write(window.value);
// }
// x();
// y();

// var value2 = 30;
// function z() {
//   document.write(window.value2);
// }
// z();
//==============================================================================

//Q1.Write an if statement that checks if a given number is positive. If it is, print "The number is positive."

// value = 20;
// if (value > 0) {
//   document.write('the number is positive');
// }

//Q2. Write an if statement that checks if a student's grade is above 90. If it is, print "Excellent job!" If it's between 80 and 90, print "Good job." Otherwise, print "Keep working hard!"

// const marks = 60;
// if (marks > 90) {
//   alert('excellent Job');
// }
// if (marks >= 80 && marks <= 90) {
//   alert('good Job');
// } else {
//   alert('keep working hard');
// }
//============================================
//Q3. Write an if statement that checks if a string is empty. If it is, display a message saying "The string is empty." Otherwise, display the string itself.

// let string1 = '';
// if (string1 == '') {
//   alert('the string is empty');
// } else {
//   alert('the sting itself');
// }

//===============================================

//Q4.Write an if statement that checks if a given year is a leap year. If it is, print "It's a leap year!" If it's not, print "It's not a leap year."
let year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log('leap');
} else {
  console.log('not leap');
}

//JavaScript Switch
//Q. Write a switch statement that takes a month number (1-12) as input and prints the corresponding month name.

const month = 1;
switch (month) {
  case 0:
    console.log(' the month is january');
    break;
  case 1:
    console.log('the month is february');
    break;
  case 2:
    console.log('the month is march');
    break;
  default:
    console.log('invalid input');
}

// ====for loop ======================
//Q. Write a for loop that prints the numbers from 1 to 10 in ascending order.
for (i = 1; i <= 10; i++) {
  document.write(i, '</br>');
}

//Implement a while loop that continuously prompts the user for input until they enter 'quit'.

// let userinput = '';
// while (userinput !== 'quit') {
//   userinput = prompt('enter you input or (for exit type quite)');
// }
// userinput = prompt('quit');

//Q.Create a for loop that calculates the sum of all even numbers between 1 and 100 (inclusive).

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write(
  'the sum of all even numbers between 1 and 100 =' + sum + '</br>'
);

('</br>');

//Q. Write a while loop that counts down from 10 to 1 and prints each number.
let count = 10;
while (count >= 1) {
  document.write(count + '</br>');
  count--;
}

//Q. implement a nested for loop structure to print a pattern of asterisks in the following format:

const row = 7;
for (let i = 1; i <= row; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}
