const today = new Date();
const day = today.getDay();

const daylist = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday ',
  'Thursday',
  'Friday',
  'Sat',
];

console.log(`today is: ${daylist[day]}`);

let hour = today.getHours();
let Minute = today.getMinutes();
let Second = today.getSeconds();

let AMPM = hour >= 12 ? 'PM' : 'AM';
hour = hour >= 12 ? hour - 12 : 'PM';

if (Minute < 10) {
  Minute = `0${Minute}`;
} else {
  Minute = `${Minute}`;
}

if (Second < 10) {
  Second = `0${Second}`;
} else {
  Second = `${Second}`;
}
if (hour === 12 && AMPM === 'AM') {
  if (Minute === 0 && Second === 0) {
    hour = 12;
    AMPM = 'Non';
  } else {
    hour = 12;
    AMPM = 'AM';
  }
}

if (hour === 12 && AMPM === 'PM') {
  if (Minute === 0 && Second === 0) {
    hour = 12;
    AMPM = 'MidNight';
  } else {
    hour = 12;
    AMPM = 'PM';
  }
}

console.log(`Current Time is: ${hour}${AMPM}:${Minute}:${Second}`);
