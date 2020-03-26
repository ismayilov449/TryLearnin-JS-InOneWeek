// // const first = () => {
// //     console.log('First');
// //     second();
// // }

// // const second = () => {
// //     setTimeout(() => {
// //         console.log('Second');
// //     }, 2000);

// //     third();
// // }

// // const third = () => {
// //     console.log('Third');
// // }

// // first();


// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {

//             console.log(xhr.responseText);
//         } else if (xhr.status === 404) {
//             console.log('404 NotFound')
//         }
//     }
// }

// xhr.onprogress = () => {
//     console.log('on processing');
// }

// // //ready state
// // 0 : request not initialized
// // 1 : server connection established
// // 2 : request recieved
// // 3 : processing request
// // 4 : request finished and response is readyState


// // //status messages 
// // 200 : OK
// // 403 : Forbidden
// // 404 : Not Found

// // xhr.open('GET', 'modernJs/files/msg.txt', true);

// // xhr.send();

// // setTimeout(() => {

// //     console.log('im console ahah');
// // }, 2);


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {

        console.log(xhr.responseText);

    }

}

xhr.open('GET', 'modernJs/files/employees.json', true);
xhr.send();

