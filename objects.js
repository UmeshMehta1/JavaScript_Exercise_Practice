//Create an object representing a book with properties for title, author, and year of publication. Add a method that displays the book information.

// let book = {
//   title: 'Math',
//   author: 'raju',
//   yearOfPublication: 2022,
//   DisplayTheBookInfo() {
//     document.write(`The book Title is ${this.title} ` + '</br>');
//     document.write(`The author of the book is ${this.author}` + '</br>');
//     document.write(`Publication of the book on ${this.author}` + '</br>');
//     // document.write(`Publication of the book on ${this.author}`)
//   },
// };
// book.DisplayTheBookInfo();

//===================================================
//Create an object representing a student with properties for name, age, and grades (an array of numbers). Add a method that calculates and returns the average grade of the student.

// const student = {
//   name: 'John Doe',
//   age: 20,
//   grades: [80, 90, 75, 95, 85],
//   calculateAverageGrade: function () {
//     const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//     return sum / this.grades.length;
//   },
// };

// console.log(student.calculateAverageGrade()); // Output: 85

// const sourceFlashcard = {
//   question: 'What is the capital of France?',
// };

// const targetFlashcard = Object.assign({}, sourceFlashcard, {
//   answer: 'Paris',
//   category: 'Geography',
//   difficulty: 'Medium',
//   tags: ['capital cities', 'Europe'],
//   source: 'Wikipedia',
//   notes: "Remember to spell 'Paris' correctly.",
// });

// console.log(targetFlashcard);

///=========================================================
//Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// var user = {
//   name: 'John',
//   sirname: 'smith',
// };
// user.name = 'Pete';
// document.write(user.name);

// delete user.name;

// document.write(user.name === undefined);

//================================================
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// let obj = {};

// function isEmpty() {
//   for (key in obj) {
//     return false;
//   }
//   return true;
// }
// document.write(isEmpty());

//==================================================
//let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//If salaries is empty, then the result must be 0.

//Ans:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// function sal() {
//   document.write(
//     `Total salaries is ${salaries.John + salaries.Ann + salaries.Pete}`
//   );

//   if (salaries === 0) {
//     return 0;
//   } else {
//     document.write('You enter correct information');
//   }
// }
// sal();

//=========================================
//Here the function makeUser returns an object.

//What is the result of accessing its ref? Why?'

// function makeUser() {
//   return {
//     name: 'John',
//     ref: this,
//   };
// }

// let user = makeUser();

// alert(user.name);

//====================================

// function fun(val) {
//   val();
// }

// fun(function abc() {
//   console.log(66);
// });

//===================================

// function abc() {
//   this.name = 'umesh';
// }
// let op = new abc();
// console.log(op);

//====================================

// for (i = 1; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   document.write(i + '</br>');
// }

//============================
// var sum = 0;
// for (i = 4; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   sum += i;
// }
// document.write(sum);

//============================
// let sum = 0;
// for (i = 4; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   sum += i;
// }
// document.write(sum);

//===========================

// var x = 0;
// while (x < 6) {
//   //document.write(x + '</br>');
//   x++;
// }
// document.write(x);

//===============================
// function main() {
//   var depth = parseInt(readLine(), 10);

//   for (distance = 7, day = 1; distance < depth; distance += 7, day++) {
//     distance -= 2;
//   }
//   console.log(day);
// }

function main() {
  var depth = parseInt(readLine(), 10);

  let days = 0;
  let distance = 0;

  for (; 0 < depth; ) {
    // Every day the snail climb up 7 feet
    distance = distance + 7;
    days++;

    if (distance >= depth) {
      break;
    }
    // Every night the snail return 2 feet
    distance = distance - 2;
  }

  console.log(days);
}
