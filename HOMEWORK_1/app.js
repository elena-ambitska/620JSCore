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

console.log(yearBD +' is: ' + typeof yearBD);
console.log(group +' is: ' + typeof group);
console.log(maritalStatus +' is: ' + typeof maritalStatus);
console.log(studentName +' is: ' + typeof studentName);
console.log(studentLastName +' is: ' + typeof studentLastName);
console.log(address +' is: ' + typeof address);
console.log( experience +' is: ' + typeof experience);

//Task 7

let login = prompt('enter your login', 'User');
let password = prompt('enter your password', 'qwerty');
let email = prompt('enter your email', 'usermale@gmail.com');

let message = `Dear ${login}, your email is ${email}, your password is ${password}.`
 alert(message);

//Task 8
const secondInMinute = 60;
const minutesInHour = 60;


let secondsInHour = document.getElementById('secondsInHour');
let secondHourResult = secondInMinute * minutesInHour;
secondsInHour.innerHTML = secondHourResult;

const hoursInDay = 24;

let secondsInDay = document.getElementById('secondsInDay');
let secondDayResult = secondHourResult * hoursInDay
secondsInDay.innerHTML = secondDayResult;

const daysInMonth = 30;

let secondsInMonth = document.getElementById('secondsInMonth');
let secondMonthResult =  secondDayResult * daysInMonth;
secondsInMonth.innerHTML = secondMonthResult;