let myObj = {
    method: 'GET',
    url: 'https://randomuser.me/api/?results=5'
    // headers: {
    //     'content-type': 'application/json'
    // }

}

let request = obj => {


    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        xhr.open(obj.method || 'GET', obj.url, true);

        if (xhr.headers) {
            Object.keys[obj.headers]
                .forEach(key => {
                    xhr.setRequestHeader(key, obj.headers[key]);

                });
        }

        xhr.onload = () => {

            if (xhr.status >= 200 && xhr.status < 300) {

                resolve(xhr.response);

            } else {

                reject(xhr.statusText);
            }

            xhr.onerror = () => {
                reject(xhr.statusText);
            }

        }
        xhr.send();


    })
};

request(myObj).then((data) => {

    let users = JSON.parse(data);

    users.results.forEach(user => {
        console.log(user);

    });


}).catch((error) => {

    console.log(error.message);
});


