 //********************Task1**************************/

 function calcRectangleArea(width, height) {

     if (isNaN(width) || isNaN(height)) {
         throw new Error(' не число')
     } else {
         return width * height;
     }
 }

 try {
     console.log(calcRectangleArea(3))
 } catch (e) {
     console.log(e);
 }
  console.log(calcRectangleArea(3, "qwe"));

 //********************Task2**************************/

  function checkAge(){
      let userAge = prompt('How old are you?', '');

      if ( userAge.trim () === ''){
         throw new Error ('The field is empty! Please enter your age');
     } else if ( isNaN(userAge)){
        throw new Error ('Not a number! Please enter your age');
     } else if ( userAge < 14){
         throw new Error ('You are too yuong');
     } else {
         alert( 'the film is open for viewing');
     }

  }
  try{
     checkAge();
 } catch (e){
     alert ( e.message);
 }

 //********************Task3**************************/

 class MonthException {
     constructor(message) {
         this.name = 'MonthException';
         this.message = message;
     }
 }

 function showMonthName(month) {
     if (isNaN(month)) {
         throw new MonthException('не номер месяца')
     } else if (month > 12 || month < 1) {
         throw new MonthException('число больше(меньше), чем индексов в массиве')
     } else if (!Number.isInteger(month)) {
         throw new MonthException('не целое число')
     }

     let monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
     let result = monthes[month - 1];

     return result;
 }

 try {
     console.log(showMonthName(76));
 } catch (e) {
     console.log(e.message);
 }

 console.log(showMonthName(8));

 //********************Task4**************************/

 function showUser(id) {
     if (id < 0) {
         throw new Error(`${id} має від'ємне значення`)
     }
     return {
         id
     };
 }
 try {
     console.log(showUser(-10));
 } catch (n) {
     console.log(n.message);
 }
 console.log(showUser(5));

 function showUsers(ids) {
     let arr = []
     for (let id of ids) {
         try {
             arr.push(showUser(id))
         } catch (n) {
             console.log(n.message);
         }
     }
     return arr
 }
 console.log(showUsers([7, -12, 44, 22]))