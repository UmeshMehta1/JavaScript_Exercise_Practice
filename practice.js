// function calculateShoppingCost() {
//   let totalCost = 0;

//   while (true) {
//     const quantity = parseInt(
//       prompt('Enter the quantity of the item (enter 0 to stop):')
//     );
//     const price = parseFloat(
//       prompt('Enter the price of the item (enter 0 to stop):')
//     );

//     if (quantity === 0 || price === 0) {
//       break;
//     }

//     const itemCost = quantity * price;
//     totalCost += itemCost;
//   }

//   if (totalCost > 100) {
//     totalCost -= totalCost * 0.1; // Apply 10% discount
//   }

//   let message;

//   switch (true) {
//     case totalCost < 50:
//       message = 'Your total cost is low.';
//       break;
//     case totalCost >= 50 && totalCost <= 100:
//       message = 'Your total cost is moderate.';
//       break;
//     case totalCost > 100:
//       message = 'Your total cost is high.';
//       break;
//     default:
//       message = 'Your shopping cart is empty.';
//   }

//   console.log(message);
//   console.log('Total cost: $' + totalCost.toFixed(2));
// }

// calculateShoppingCost();

// function btn() {
//   alert('hello world');
// }

//=====================================
// let day = 9;
// let result;
// switch (day) {
//   case 1:
//     result = 'sunday';
//     break;
//   case 2:
//     result = 'monday';
//     break;
//   case 3:
//     result = 'tuesday';
//     break;
//   case 4:
//     result = 'wednesday';
//     break;
//   case 5:
//     result = 'thursday';
//     break;
//   case 6:
//     result = 'friday';
//     break;
//   case 7:
//     result = 'satruday';
//     break;
//   default:
//     result = 'Invalid Input';
//     break;
// }
// alert(result);

//=========================
// for loop
// for (let i = 1; i <= 10; i++) {
//   document.write('The Resulet is: ' + 'hello world' + '</br>');
// }

//=====================================
// while Loop

// let i = 1;
// while (i <= 20) {
//   document.write(i + '</br>');
//   i++;
// }

//===================================================
// do-while Loops
// let i = 1;
// do {
//   document.write(i + '</br>');
//   i++;
// } while (i <= 20);

// function btn1() {
//   let age = prompt('enter your age');
//   if (age > 18) {
//     document.write('you are voter');
//   } else {
//     document.write('you are not voter');
//   }
// }

//=======================
//call function

// var obj = {
//   name: 'raj',
//   age: 20,
//   city: 'chennai',
// };

//  var obj2 = {
//   name: 'rakesh',
//   age: 23,
//   city: 'bangalore',
//   fun: function () {
//     document.write(
//       `${this.name}  is happy person and there age is  ${this.age}`
//     );
//   },
// };

// // function work() {
// //   document.write(obj.name + 'is happy person');
// // }
// obj2.fun.call(obj2);

//======================================

// let obj1 = {
//   name: 'ram',
//   age: 20,
// };
// let obj2 = {
//   name: 'Shyam',
//   age: 21,
// };
// function work() {
//   document.write(this.name);
// }
// work.apply(obj1);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1.push(...arr2);
// document.write(arr1);
// let math1 = Math.max.apply(arr1, arr2);
// document.write(math1);

//==========================================
//bind function

function multiply(a, b) {
  return a * b;
}

let fun = multiply.bind(null, 3, 8);
document.write('Result of bind:', fun());
