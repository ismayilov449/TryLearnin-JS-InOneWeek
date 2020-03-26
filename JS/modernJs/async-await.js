// async function fn(){
//     return 'hello'
// }

// fn().then(res => console.log(res));

var isError = true;

function getCategory() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isError) {
                resolve('Phone');
            } else {
                reject('Eroorooror');
            }
        }, 1000);

    });

}


function getProducts(category) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isError) {
                resolve('5 products in ' + category);
            } else {
                reject('Eroorooror');
            }

        }, 1000)
    })

}

// getCategory()
//     .then(getProducts)
//     .then(response => {
//         console.log(response);
//     })

async function getProduct() {

    try {

        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

getProduct();