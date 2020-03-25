// let welcomeES5 = function () {
//     console.log('Hello from ES5');
// }

// let welcomeES6 = (adam) => {
//     console.log('Hello from ES6' + adam);
// }


// let split = (text) => {
//     return text.split(' ');
// }

// console.log(split('salam qaqa ahah'));

// let getProductEs = (id, name) => (
//     {
//         id: id,
//         name: name
//     }
// );

// console.log(getProductEs(1, 'Alma'));

// const phones = [
//     { name: 'IPhone 8', price: 3000 },
//     { name: 'IPhone 7', price: 2000 },
//     { name: 'IPhone 6', price: 1000 },
//     { name: 'IPhone 5', price: 100 },

// ];

// let pricesES6 = phones.map(phone => phone.price);

// console.log(pricesES6);

// const arr = [1, 2, 3, 6, 10, 20, 30, 50, 55, 61, 79];

// let evenNumbs =  arr.filter(number => (number % 2 == 0));

// console.log(evenNumbs);

// let list = {
//     category: 'Phone',
//     names: ['IPhone', 'Samsung', 'Nokia'],
//     call: function () {
//         this.names.forEach(name => console.log(this.category,name));
//     }
// }

// list.call();


// function Game() {
//     this.live = 0;
//     this.addLive = () => {
//         this.OneUp = setInterval(() => console.log(++this.live), 1000);
//     }
// }

// let player = new Game();
// player.addLive();


// let numbers = [1, 2, 3, 4];

// function getTotal(a, b, c, d) {
//     return a + b + c + d;
// }
// //es5
// console.log(getTotal.apply(this, numbers));

// //es6
// console.log(getTotal(...numbers));

//spread operators
//function allows endless paramaters 

//rest paramaters
//function allows items then convert them to array


//Destructring

// var a, b, rest;

// [a, b] = [10, 20];

// [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(a);
// console.log(b);
// console.log(rest);

//Array
// arrc
// const arrconfig = ['localhost',8000,900];

// const [server, port, timeout] = arrconfig;

// console.log(arrconfig);

// const objConfig = {
//     server: 'localhost',
//     port: 8080,
//     timeout: 900
// };


// const {server,port,timeout} = objConfig;

// console.log(objConfig);


//Array.from(boxes).forEach(box => box.style.backgroundColor = 'green');


// class PersonES6 {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     calculateAge() {
//         return this.age;
//     }

//     static sayHi() {
//         console.log('Hi');
//     }

// }



// let adam = new PersonES6('adam', 22);

// // console.log(adam);
// // console.log(adam.calculateAge());

// console.log(PersonES6.sayHi());


class PersonES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayhi() {
        return `im ${this.name} ${this.age}`
    }
}


class CustomerES6 extends PersonES6 {
    constructor(name, age, email) {
        super(name, age);
        this.email = email;
    }
}