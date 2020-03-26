// var p = new Promise(function (resolve, reject) {

//     if (true) {

//         resolve('success');

//     } else {
//         reject('error');
//     }

// });


// p.then(function (data) {
//     console.log(data);
// })

// p.catch(function (data) {
//     console.log(data);
// })


// new Promise(function (resolve, resject) {

//     setTimeout(() => {
//         resolve(5);
//     }, 1000);

// }).then(function (data) {
//     console.log(data);
//     return data * data;
// }).then(function (data) {
//     console.log(data);
// });


// const isMomHappy = true;

// const willGetNewPhone = new Promise((resolve, reject) => {

//     if (isMomHappy) {
//         const phone = {
//             name: 'Iphone 8',
//             color: 'Silver'
//         };
//         resolve(phone);
//     } else {
//         var error = new Error('Mom isnt happy!');
//         reject(error);
//     }

// })
// .then((data) => {

//     console.log(data);

// }).catch((error) => {

//     console.log(error.message);

// });

// const showToFriend = function (phone) {

//     const message = 'Hey friends.This is my new phone,look at ' + phone.name;

//     return  Promise.resolve(message);

// }


// const askMom = function () {

//     willGetNewPhone
//         .then(showToFriend)
//         .then(message => console.log(message))
//         .catch(error => {
//             console.log(error.message);
//         })

// }

// askMom();