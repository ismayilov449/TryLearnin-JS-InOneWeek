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

    if (added) {
        setTimeout(() => {
            products.push(prd);

            callback(null, prd);
        }, 2000);
    } else {
        callback('500', prd);
    }



}

function getProducts() {

    setTimeout(() => {
        products.forEach(prd => {
            console.log(prd.name);
        });

    }, 1000)

}

addProduct({ id: 4, name: 'Samsung S11', price: 6000 }, function (err, data) {

    if (err) {
        console.log("erroorr " + err);
    } else {
        console.log(data);
    }

});
