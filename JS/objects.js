//object literals

// let rufat = {
//     name: 'Rufat',
//     yearOfBirth: 21,
//     job: 'Student'
// };

// function Person(name, yearOfBirth, job) {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function(){
//         return 2020 - this.yearOfBirth;
//     }
// }

// let rufat = new Person('Rufat', 1999, 'Student');
// let adam = new Person('Adam', 2001, 'Adamli');

// console.log(rufat.name);
// console.log(rufat.calculateAge());


// console.log('*************************');

// console.log(adam.name);
// console.log(adam.calculateAge());

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function () {
//         return 2020 - this.yearOfBirth;
//     }
// }

//Prototype


// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }


// Person.prototype.calculateAge = function () {

//     return 2020 - this.yearOfBirth;

// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// let rufat = new Person('Rufat', 1999, 'Student');

// console.log(rufat.getName());


// let Employee = function (name, salary) {

//     if (!(this instanceof Employee)) {
//         return new Employee(name, salary);
//     }

//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype.calculareSalary = function () {
//     var month = new Date().getMonth() + 1;
//     var tax = 0;
//     var total = this.salary * month;

//     if (total <= 20000) {
//         tax = total * 0.2;
//     } else if (total >= 20000 && total <= 20000) {
//         tax = total * 0.25;
//     } else {
//         tax = total * 0.3;
//     }

//     return {
//         tax: tax,
//         paid: total - tax
//     };
// }

// let emp1 = Employee('Emp 1', 5000);
// let emp2 = Employee('Emp 2', 4000);
// let emp3 = Employee('Emp 3', 3000);

// console.log(emp1.calculareSalary());


// let personProto = {
//     calculateAge: function () {
//         return 2020 - this.yearOfBirth;
//     }
// }

// let adam = Object.create(personProto);

// let rufat = Object.create(personProto, {
//     name: { value: 'Rutat' },
//     yearOfBirth: { value: 1999 },
//     job: { value: 'Student' }
// });

// console.log(rufat);
// console.log(rufat.calculateAge());


// let Person = function (name, year, job) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
// }

// Person.prototype.getAge = function () {
//     return 2020 - this.year;
// }

// let Teacher = function (name, year, job, subject) {

//     Person.call(this, name, year, job);

//     this.subject = subject;

// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.greeting = function(){
//     console.log('Hi,I am '+ this.name);
// }

// let teacher1 = new Teacher('Teacher 1', 1989, 'teacher', 'math');

// console.log(teacher1);
// console.log(teacher1.getAge());
// console.log(teacher1.greeting());



// let Person = function (name, year) {
//     this.name = name;
//     this.year = year;
// }

// Person.prototype.Introduce = function () {
//     console.log('Hi,I am ' + this.name);
// }

// let Student = function (name, year, number) {
//     Person.call(this, name, year);
//     this.number = number;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.Study = function () {
//     console.log(number + ' ' + number + ' is learning now!');
// }


// let Teacher = function (name, year, branch) {

//     Person.call(this, name, year);
//     this.branch = branch;

// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.Teach = function () {
//     console.log(name + ' ' + this.branch + ' is teaching now!');
// }

// let Headmaster = function (name, year, branch) {

//     Teacher.call(this,name, year, branch);

// }

// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;

// Headmaster.prototype.ShareTask = function () {
//     console.log('Headmaster ' + this.name + ' is sharing tasks now!');
// }

// let rufat = new Headmaster('Rufat',1999,'math');
// rufat.Introduce();

// rufat.ShareTask();

// const person = {
//     name: 'Rufat',
//     surName: 'Ismayilov',


// };


// Object.defineProperty(person, 'fullName', {
//     get function() {
//         console.log(name + ' ' + surNme);
//     },
//     set function(value) {
//         const parts = value.split(' ');
//         this.name = parts[0];
//         this.surName = parts[1];
//     }

// })

// Object.defineProperty(person, 'Age', {
//     value: 50,
//     writable : true
// })

// //Person.setFullName = 'Adam adamli';

// console.log(person);

// var welcome = function (a,b) {
//     console.log('Welcome ' + this.name + '.Are u interested in '+ a + ' and ' + b );
// }

// var adam = {name : 'Adam'}

// welcome.call(adam,'asp.net','react');

// // console.log(welcome

// welcome.apply(adam,['asp.net','angular']);

// welcomeAdam = welcome.bind(adam);

// welcomeAdam('asp.net','css');


// var range = {
//     max: prompt('enter the max number'),
//     min: prompt('enter the min number')
// }

// var rangeFunction = function (b) {
//     b = parseInt(b);
//     if (b <= this.max && b >= this.min) {

//         return console.log('aue');
//     }
// }


// rangeFunction.call(range, prompt('enter your number : '));

try {

    console.log(myFunction());
} catch (error) {
    console.log(error);
}