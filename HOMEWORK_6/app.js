//Task 1

document.getElementById('test').innerHTML = 'Last';

document.body.children[0].innerHTML = 'Last'

//Task 2
let newImg = document.querySelector('.image').src = './image/oscar-sutton-yihlaRCCvd4-unsplash.jpg';
alert(newImg);

//Task 3
let i = 0;
let list = document.querySelectorAll('div p').forEach(element => {
    console.log(`Selector text ${i}: ${element.innerText}`)
    i++;
});;

//Task 4

alert(document.getElementById('list').children[0].innerText);
alert(document.getElementById('list').children[4].innerText);
alert(document.getElementById('list').children[1].innerText);
alert(document.getElementById('list').children[3].innerText);
alert(document.getElementById('list').children[2].innerText);

alert(document.querySelector('#list').firstElementChild.innerText);
alert(document.getElementById('list').lastElementChild.innerText)
alert(document.querySelector('#list li:nth-child(2)').innerText);
alert(document.querySelector('#list li:nth-child(4)').innerText);
alert(document.querySelector('#list li:nth-child(3)').innerText);

//Task 5
document.querySelector('h1').style.backgroundColor = 'green';
document.getElementById('myDiv').firstElementChild.style.fontWeight = 'bold';
document.getElementById('myDiv').children[1].style.color = 'red';
document.getElementById('myDiv').children[2].style.textDecoration = 'underline';
document.getElementById('myDiv').lastElementChild.style.fontStyle = 'italic';

[...document.querySelector('#myList').children].forEach((e) => {
    e.style.display = 'inline';
})
document.querySelector('span').style.display = 'none';

//Task 6
let message1 = prompt('Enter first message', ' ');
let message2 = prompt('Enter second message', ' ');

document.getElementById('input1').value = message1;
document.getElementById('input2').value = message2;

setTimeout(() => {
    document.getElementById('input1').value = message2;
    document.getElementById('input2').value = message1;
}, 1000);

//Task 7

let div = document.createElement("div");
div.id = 'myDiv';

let p = document.createElement('p');
p.innerText = 'First paragraph';
div.append(p);

let main = document.createElement('main');
main.className = 'mainClass check item';
main.append(div);
document.body.append(main);