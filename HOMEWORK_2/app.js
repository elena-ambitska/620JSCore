// Homework2 
// Task 1 

let x = 1;
let y = 2;

let res1 = `${x}${y}`;
console.log(res1); // "12"
console.log(typeof res1);

let res2 = (y > x) + String(y);

console.log(res2); // "true2"
console.log(typeof res2);

let res3 = y > x; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3);

let z;
let res4 = x + y + z;
console.log(res4); // NaN
console.log(typeof res4);

// Task 2
let userNumber = +prompt("enter the number", " ");

if (userNumber % 2 === 0 && userNumber >= 0 && userNumber % 7 === 0) {
    console.log(`${userNumber} is even positive number and multiple of number 7`)
} else if (userNumber % 7 === 0) {
    console.log(`${userNumber} is multiple of number 7`);
} else if (userNumber % 2 === 0 && userNumber >= 0) {
    console.log(`${userNumber} is even positive number`);
} else {
    console.log(`${userNumber} is other`);
}

// Task 3

let emptyArr = [];

emptyArr[0] = 22;
emptyArr[1] = 'user';
emptyArr[2] = true;
emptyArr[3] = null;

console.log(emptyArr.length);
let userValue = prompt("enter any value", " ");
emptyArr[4] = userValue;
console.log(emptyArr[4]);
emptyArr.shift(0);
console.log(emptyArr);

// Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let newCities = cities.join("*");
console.log(newCities);


//Task 5
let isAdult = +prompt("Cкільки Вам років?");
isAdult > 18 ? console.log("Ви повнолітні.") : console.log("Ви ще надто молоді.");

//Task 6
let sideA = +prompt('Довжина першої сторони трикутника', ' ');
let sideB = +prompt('Довжина другої сторони трикутника', ' ');
let sideC = +prompt('Довжина третьої сторони трикутника', ' ');

let p = (sideA + sideB + sideC) / 2;
console.log(p);
let area = parseFloat(Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC)).toFixed(4));
console.log(area);

let hypotenuse = Math.max(sideA, sideB, sideC);
console.log(hypotenuse);

let catets = [];
 sideA !=hypotenuse ? catets.push( sideA): console.log ( "Значит гипотенуза");
 sideB !=hypotenuse ? catets.push( sideB): console.log ( "Значит гипотенуза");
 sideC !=hypotenuse ? catets.push( sideC): console.log ( "Значит гипотенуза");
console.log(catets);

let catetsPowSum = catets.reduce(function(accum, catet) { 
    return catet**2 + accum;
}, 0);
console.log(catetsPowSum );

if (catets.length === 1){
    console.log (" равнобедренный треугольник");
}else (catetsPowSum === hypotenuse ** 2 ? console.log('Має прямий кут') :
    console.log('Не має прямий кут'));

    //Task 7
    let date = new Date();
    let time = date.getHours();
    let message = (time >= 5 && time < 11) ? "Доброго ранку" :
    (time >= 11 && time < 17) ? "Доброго дня" :
    (time>=17 && time < 23) ? "Доброго вечора" :
    "Доброї ночі";
    alert( message );


let notification;
    if(time >= 5 && time < 11){
         notification = "Доброго ранку";
    } else if (time >= 11 && time < 17) {
        notification = "Доброго дня";
    }else if (time>=17 && time < 23){
        notification = "Доброго вечора";
    } else {notification = "Доброї ночі"};
 console.log( notification );
  