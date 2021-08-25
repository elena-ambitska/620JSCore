//Task1

let openWind = window.open("https://google.com", "google", "width=300,height=300,left=700,top=200");

setTimeout(() => {
   openWind.resizeTo(500, 500) 
}, 2000);

setTimeout(() => {
    openWind.moveTo(200, 200) 
 }, 2000);

 setTimeout(() => {
    openWind.close()
 }, 2000);

//Task2
function changeCSS() {
    let changeStyle = document.getElementById('text');
    changeStyle.style.color = 'orange';
    changeStyle.style.fontSize = '20';
    changeStyle.style.fontFamily = "Comic Sans MS";
}

//Task3
const refs = {
    container: document.querySelector('.container'),
    makeBlue: document.querySelector('.oneClick'),
    makePink: document.querySelector('.doubleClick'),
    makeBrown: document.querySelector('.holdClick'),
    makeYellow: document.querySelector('.hover')
}

refs.makeBlue.addEventListener('click', targetBtnOneClick)

function targetBtnOneClick() {
    refs.container.style.background = 'blue';
}

refs.makePink.addEventListener('dblclick', targetBtnDblClick)

function targetBtnDblClick() {
    refs.container.style.background = 'pink';
}

refs.makeBrown.addEventListener('mousedown', btnDown);

function btnDown() {
    refs.container.style.background = 'brown';
}
refs.makeBrown.addEventListener('mouseout', btnUp);
refs.makeBrown.addEventListener('mouseup', btnUp);

function btnUp() {
    refs.container.style.background = 'white';
}

refs.makeYellow.addEventListener('mouseover', onMouseEnter);
refs.makeYellow.addEventListener('mouseout', onMouseLeave);

function onMouseEnter() {
    refs.container.style.background = 'yellow';
}

function onMouseLeave() {
    refs.container.style.background = 'white';
}

//Task4

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    document.querySelector('#select option:checked').remove();
})

//Task5

const liveBtn = document.querySelector('.liveBtn');
const textResult = document.querySelector('.textForBtn');


['mouseover', 'mouseout', 'click'].forEach(function (i) {
    let handler = function (event) {
        switch (event.type) {
            case 'click':
                textResult.innerHTML += "I was pressed!</br>"
                break;
            case 'mouseover':
                textResult.innerHTML += "Mouse on me!</br>"
                break;
            case 'mouseout':
                textResult.innerHTML += "Mouse is not on me!</br>"
                break;
        }
    };

    liveBtn.addEventListener(i, handler);
});

//Task6
const area = document.querySelector('.base');
let tab = window.addEventListener('resize', () => {
    area.innerHTML = 'width: ' + window.outerWidth + ' height ' + window.outerHeight;
})

//Task7

const cities = {
    ger: ['Berlin', 'Hamburg', 'Frankfurt', 'Düsseldorf', 'Dresden'],
    ukr: ['Kyiv', 'Odessa', 'Lviv', 'Kharkiv', 'Poltava', 'Kherson'],
    rus: ['Moskva', 'Piter', 'Sochy', 'Perm', 'Rostov', 'Ekaterenburg']
}

const country = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const city = document.querySelector('.cityName')
country.addEventListener('change', renderCities)

function renderCities() {
    let currentCountry = country.value;

    citiesSelect.innerHTML = '';
    cities[currentCountry].forEach((city) => {
        let option = document.createElement('option');
        option.value = city;
        option.innerText = city;
        citiesSelect.append(option)
    })
    renderCityText()
}
renderCities();


citiesSelect.addEventListener('change', renderCityText)

function renderCityText() {
    city.innerText = country.value + ': ' + citiesSelect.value;
}