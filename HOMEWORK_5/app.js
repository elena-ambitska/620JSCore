//**************************Task1*****************/

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
console.log(propsCount(mentor));

//**************************Task2*****************/
function showProps(obj) {

    return {
        values: Object.values(obj),
        keys: Object.keys(obj)
    }
}
mentor.experiance = 7;
mentor.expertice = ['JS', 'React', 'TypeScript'];

console.log(showProps(mentor));

//**************************Task3*****************/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`
    }

}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName} `
    }
    showCourse() {
        let date = new Date();
        let getYear = date.getFullYear();
        return getYear - this.year + 1;
    }
}

let stud1 = new Student("Petro", "Petrenko", 2021);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//**************************Task4*****************/

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }
    get showExp() {
        return this.#experience
    }
    set setExp(exp) {
        this.#experience = exp;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;
console.log(worker2.showSalaryWithExperience());
let worker3 = new Worker("Andy Ander", 29, 23);
worker2.setExp = 1.5;
let arr = [worker1, worker2, worker3];

arr.sort((a, b) => {
    return b.showSalaryWithExperience() - a.showSalaryWithExperience()
}).forEach((worker) => {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`)
})

//**************************Task5*****************/
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super()
        this.a = a;
        this.h = h;
    }
    getArea() {
        return 0.5 * this.a * this.h;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super()
        this.a = a;
    }
    getArea() {
        return this.a ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super()
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r ** 2;
    }
}

function handleFigures(figures) {

    return Math.floor(figures.reduce((acc, fig) => {

        if (fig instanceof GeometricFigure) {
            console.log(fig)
            return acc + fig.getArea();
        } else {
            return acc;
        }

    }, 0))
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));