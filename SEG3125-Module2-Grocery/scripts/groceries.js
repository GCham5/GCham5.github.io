// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99
    },
    {
        name: "spinach",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.30
    },
    {
        name: "banana",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 0.99
    },
    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.10
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "pretzel",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 3.00
    },
    {
        name: "cookies",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: 3.00
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 10.00
    },
    {
        name: "chicken thigh",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 7.99
    },
    {
        name: "ground beef",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 11.70
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
    let initialProductList = [];
    let product_names = [];

    //adding the items based on the restrictions
    for (i = 0; i < restrictions.length; i++) {
        var restriction = restrictions[i];

        for (let x = 0; x < prods.length; x += 1) {
            if ((restriction == "Vegetarian") && (prods[x].vegetarian == true) && (!product_names.includes(prods[x].name))) {
                initialProductList.push(prods[x]);
                product_names.push(prods[x].name);
            }
            else if ((restriction == "GlutenFree") && (prods[x].glutenFree == true) && (!product_names.includes(prods[x].name))) {
                initialProductList.push(prods[x]);
                product_names.push(prods[x].name);
            }
            else if ((restriction == "Organic") && (prods[x].organic == true) && (!product_names.includes(prods[x].name))) {
                initialProductList.push(prods[x]);
                product_names.push(prods[x].name);
            }
        }
    }

    //filtering items
    for (i = 0; i < restrictions.length; i++) {
        var restriction = restrictions[i];

        for (x = 0; x < initialProductList.length; x++) {
            if ((restriction == "Vegetarian") && (initialProductList[x].vegetarian == false) && (product_names.includes(initialProductList[x].name))) {
                product_names.splice(product_names.indexOf(initialProductList[x].name), 1);
            }
            else if ((restriction == "GlutenFree") && (initialProductList[x].glutenFree == false) && (product_names.includes(initialProductList[x].name))) {
                product_names.splice(product_names.indexOf(initialProductList[x].name), 1);
            }
            else if ((restriction == "Organic") && (initialProductList[x].organic == false) && (product_names.includes(initialProductList[x].name))) {
                product_names.splice(product_names.indexOf(initialProductList[x].name), 1);
            }
        }
    }

    if (restrictions.length == 0) {
        for (i = 0; i < prods.length; i++) {
            product_names.push(prods[i].name);
        }

    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}