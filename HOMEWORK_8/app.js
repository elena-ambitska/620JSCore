//Task1
function checked(str) {
    let re = /[^A-Z]/
    let result = re.test(str);
    console.log(result)

    result ? console.log(`${str} not starts with upperCase character`) :
        console.log(`${str} starts with upperCase character`)

}
checked('regexp')
checked('RegExp')

//Task2

function validate(email) {
    let re = /\S+@\S+\.\S+/
    return re.test(email);
}
console.log(validate('lena@gmail.com'));
console.log(validate('lena@.com'));
console.log(validate('lena.gmail.com'));

//Task3
let str = "cdbBdbsbz";
let reg = /d(b+)(d)/gi
let result = reg.exec(str);
console.log(result)

//Task4
const re = /(\w+)\s(\w+)/;
let string = "Java Script";
let newstr = string.replace(re, "$2, $1");
console.log(newstr);

//Task5
function isCard(numCard) {
    let numberNew = numCard.replace(/\D/g, '');
    console.log(numberNew)
    let regExpr = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    return regExpr.test(numberNew)
}
console.log(isCard('4441 - 1144 - 5111 - 7632'));

//Task6

function checkEmail(str) {
    let re = /^\w+[\w\-{1}\_]+/gi
    if (/\-\-/.test(str)) {
        console.log('Email is not correct!')
        return
    }
    re.test(str) ? console.log('Email is correct!') :
        console.log('Email is not correct!');
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');


//Task7?
function checkLogin(login) {
    let re = /^[a-z]+(?:([0-9]+\.?[0-9]*)[a-z]*)*/g
    console.log(login.match(/[0-9]+\.?[0-9]*/gi));
    return re.test(login);

}
console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
console.log(checkLogin('4ee1*1ret3'));
