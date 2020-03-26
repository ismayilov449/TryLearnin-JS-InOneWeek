var products = [
    {
        id: 1,
        name: 'Samsung S8',
        price: 3000
    },
    {
        id: 2,
        name: 'Samsung S9',
        price: 4000
    },
    {
        id: 3,
        name: 'Samsung S10',
        price: 5000
    }
]

let added = false;

function addProduct(prd, callback) {

    return new Promise(function (resolove, reject) {

        setTimeout(() => {

            products.push(prd);
            let added = true;

            if (added) {
                resolove();
            } else {
                reject('error');
            }

        }, 2000);

    });

}

function getProducts() {

    setTimeout(() => {
        products.forEach(prd => {
            console.log(prd.name);
        });

    }, 1000)

}

addProduct({ id: 4, name: 'Samsung S11', price: 6000 })
    .then(getProducts)
    .catch(function (err) {
        console.log(err);
    });


