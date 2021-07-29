// Homework1 
// Task 2 
let lastName = "Ambitska"
console.log('My lastname: ' + lastName);

// Task 3
let color1 = 'white';
let color2 = 'black';
console.log(color1, color2);
color2 = color1;
console.log(color1, color2);

// Task 4
let car = {
    model: 'BMW',
    year: 2019,
    mileage: false,
    owner: undefined,
    convertibleTop: null
}

// Task 5
let isAdult = confirm("Are you adalt?");

if (isAdult === true) {
    console.log("You are welcome !");
} else {
    console.log("Bye 😈");
}

//Task 6
const studentName = 'Lena';
const studentLastName = 'Ambitska';
const group = 620;
const yearBD = 1992;
const maritalStatus = false;
let address;
let experience = null;

console.log(typeof group, typeof yearBD);
console.log(typeof maritalStatus);
console.log(typeof studentName);
console.log(typeof address);
console.log(typeof experience);

//Task 7

let login = prompt('enter your login', 'User');
let password = prompt('enter your password', 'qwerty');
let email = prompt('enter your email', 'usermale@gmail.com');

let message = `Dear ${login}, your email is ${email}, your password is ${password}.`
alert(message);

//Task 8
const secondInMinute = 60;
const minutesInHour = 60;

let secondInHour = secondInMinute * minutesInHour;
alert(secondInHour);
const hoursInDay = 24;
let secondsInDay = secondInHour * hoursInDay;
alert(secondsInDay);
const daysInMonth = 30;
let secondsInMonth = secondsInDay * daysInMonth;
alert(secondsInMonth);