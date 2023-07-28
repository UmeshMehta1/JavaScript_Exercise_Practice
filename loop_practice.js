// for (i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//++++++++++++++++++++++++
// let sum = 0;
// let num = 1;
// while (num <= 100) {
//   sum += num;
//   num++;

//   console.log(sum);
// }

//=++++++=====++++====++=

// let number = parseInt(prompt('enter a positive int.'));
// let factorial = 1;
// //initialize the variable to store result of multiplication
// if (number >= 0) {
//   for (i = 1; i < number; i++) {
//     //multiply each element with previous elements
//     factorial *= i;
//   }
//   console.log('the factor of', number, 'is', factorial);
// } else {
//   console.log('enter positive number');
// }

//===++++++

// let sum = 0;
// let count = 0;

// let number = parent(prompt('enter a number'));

// while (number >= 0) {
//   sum += number;
//   count++;
//   number = parseInt(prompt('Enter a number:'));
// }

// if (count > 0) {
//   //   document.write(`The total is ${sum}, and you entered ${count} numbers`);
//   let average = sum / count;
//   document.write('average: ' + average);
// } else {
//   console.write('enter positive number');
// }

let sum = 0;
let count = 0;

console.log(
  'Enter a series of numbers (enter a negative number to terminate):'
);

let number = parseInt(prompt('Enter a number:'));

while (number >= 0) {
  sum += number;
  count++;
  number = parseInt(prompt('Enter a number:'));
}

if (count > 0) {
  let average = sum / count;
  console.log('The average of the positive numbers entered is: ' + average);
} else {
  console.log('No positive numbers entered.');
}
