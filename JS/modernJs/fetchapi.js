//txt file

// function getText() {

//     fetch('modernJs/files/msg.txt')
//         .then(response => {
//             return response.text()
//                 .then(text => {
//                     console.log(text)
//                 })
//         }).catch(error => {
//             console.log(error);
//         })

// }

// getText();

//json

// function getJson() {

//     fetch('modernJs/files/employees.json')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.log(error.message);
//         })

// }

// getJson();


//external api

// function getExternalApi() {

//     fetch('https://randomuser.me/api/?results=5')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//             console.log(data.results);
//         }).catch(error => {
//             console.log(error.message);
//         })

// }

// getExternalApi();


function postExternalApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    var data = {
        method: 'POST',
        body: JSON.stringify({
            userId: 1,
            title: 'sample title',
            body: 'sample body'
        }),
        headers: new Headers({
            'content-type': 'application/json'
        })


    }

    fetch(url, data)
        .then(res => {
            console.log(res);

        });

}

postExternalApi();