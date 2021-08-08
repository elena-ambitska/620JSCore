//******************Task1***********************
// let array = [2, 3, 4, 5];
// let result = 1;
// for (let i =0; i < array.length; i++) {
//     result *= array[i];

// }
// console.log(result);


let array = [2, 3, 4, 5];
let result = 1;
let i = 0;
let len = array.length;

while (i < len) {

    result *= array[i];
    i++;
}
console.log(result);

//******************Task2***********************

for (let i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log(i + ' is even') : console.log(i + ' is odd')
}

//******************Task3***********************   
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        let getNum = getRandomInt(0, 500);

        arr.push(getNum);
    }
    return arr;
}
console.log(randArray(5));


//******************Task4***********************   
document.getElementById('calc').addEventListener('click', raiseToDegree);

function raiseToDegree() {
    let a = document.getElementById('busis').value;
    a = parseInt(a);
    let b = document.getElementById('degree').value;
    b = parseInt(b);

    let result = a ** b;
    document.getElementById('result').value = result;

}

//******************Task5***********************   
function findMin() {
    return Math.min(...arguments);
}
console.log(findMin(12, 14, 4, -4, 0.2));

//******************Task6***********************   
function findUnique(arr) {

    let set = new Set(arr);
    return arr.length === set.size;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

//******************Task7***********************  

function lastElem(arr, num) {
    if (typeof (num) === 'undefined') {
        num = 1;
    }
    return arr.slice(arr.length - num);
   
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, 3], 2));
console.log(lastElem([3, 4, 10, -5], 8));

//******************Task8***********************  

function uppercaseWords(str) {
    return str.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
}
console.log(uppercaseWords('i love java script'));