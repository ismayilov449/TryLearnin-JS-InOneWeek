// let category = 'Phone';

// switch (category) {

//     case 'Phone':
//         console.log("Phone category");
//         break;

//     case 'Car':
//         console.log("Car category");
//         break;

//     default:
//         console.log("Default");

// }


// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday'
//         break;

//     case 1:
//         day = 'Monday'
//         break;
// }

// console.log(day);


// var result = prompt("who's there?");

// if(result == 'cancel'){
//     console.log('Canceled');
// }else if(result == 'Admin'){
//     console.log('Welcome!');

//     var reply = prompt("enter the password : ");

//     if(reply == "TheMaster"){
//         console.log("Yeaaaah");
//     }else if(reply == 'cancel'){
//         console.log('Canceled');
//     }else{
//         console.log("Wrong password!");
//     }


// }else{
//     console.log("i dont know u");
// }

// let person = {
//     age: 18,
//     getBirthYear: function () {
//         return new Date().getFullYear() - this.age;
//     }
// }

// console.log(person.getBirthYear())


// let people = [
//     { firstName: 'Adam', lastName: 'Adamli' },
//     { firstName: 'Filankes', lastName: 'Filankesli' },
//     { firstName: 'It', lastName: 'Itoglu' }

// ]

// for (let index = 0; index < people.length; index++) {

//     console.log(people[index].firstName)

// }


// let cars = ['BMW', 'Mercedes', 'Toyota'];
// let people = [
//     { name: 'Adam', lastName: 'Adamli' },
//     { name: 'Filankes', lastName: 'Filankesov' },
//     { name: 'It', lastName: 'Itoglu' }
// ];


// for (let index = 0; index < cars.length; index++) {
//     console.log(cars[index]);
// }

// for(let index in cars){
//     console.log(cars[index]);
// }

// cars.forEach(element => {
//     console.log(element);
// });


// let val = people.map(function(item){
// return item.name + " " + item.lastName;
// });

// console.log(val);

// console.log('Ok');
// var answer = 5;
// var continued = true;
// var number = prompt("Enter your number : ");
// while (continued) {
 
//         if (number > answer) {
//             number = parseInt(prompt("Down : "));
//         } else if (number < answer) {
//             number = parseInt(prompt("Up : "));
//         } else {
//             console.log('Congrulations!!!');
//             continued = false;
//         }
    
// }

// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(10,20));

// function sumAll(){
//     var total = 0;

//     for (let index = 0; index < arguments.length; index++) {
        
//         total+= arguments[index];
//     }
//     return total;
// }

// console.log(sumAll(1,2,3,4));
 
 var name = 'Adam';

 function logName(){
     console.log(name);
     var name = 'Filankes';
 };

 logName();