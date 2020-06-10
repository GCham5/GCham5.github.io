// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var CategoryEnum = {
    VEGETABLES: "Vegetables",
    FRUITS: "Fruits",
    DAIRY: "Dairy",
    BEVERAGES: "Beverages",
    COOKING: "Cooking",
    MEATS: "Meats",
    BAKERY: "Bakery"
}

var products = [
    {
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        category: CategoryEnum.VEGETABLES,
        price: 1.99,
        image: "images/broccoli.png"
    },
    {
        name: "spinach",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        category: CategoryEnum.VEGETABLES,
        price: 1.30,
        image: "images/spinach.jpg"
    },
    {
        name: "banana",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        category: CategoryEnum.FRUITS,
        price: 0.99,
        image: "images/banana.png"
    },
    {
        name: "apple",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        category: CategoryEnum.FRUITS,
        price: 1.10,
        image: "images/apple.png"
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        category: CategoryEnum.BAKERY,
        price: 2.35,
        image:"images/bread.png"
    },
    {
        name: "pretzel",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        category: CategoryEnum.BAKERY,
        price: 3.00,
        image:"images/pretzel.jpg"
    },
    {
        name: "cookies",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        category: CategoryEnum.BAKERY,
        price: 3.00,
        image:"images/cookie.png"
    },
    {
        name: "crackers",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        category: CategoryEnum.BAKERY,
        price: 3.75,
        image:"images/cracker.jpg"
    },
    {
        name: "rice",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        category: CategoryEnum.COOKING,
        price: 1.60,
        image:"images/rice.png"
    },
    {
        name: "chocolate bar",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        category: CategoryEnum.BAKERY,
        price: 0.99,
        image:"images/chocolate.jpg"
    },
    {
        name: "chips",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        category: CategoryEnum.VEGETABLES,
        price: 5.00,
        image: "images/chips.png"
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        category: CategoryEnum.MEATS,
        price: 19.99,
        image: "images/steak.png"
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        category: CategoryEnum.MEATS,
        price: 10.00,
        image:"images/salmon.png"
    },
    {
        name: "chicken thigh",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        category: CategoryEnum.MEATS,
        price: 7.99,
        image: "images/chicken.png"
    },
    {
        name: "ground beef",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        category: CategoryEnum.MEATS,
        price: 11.70,
        image: "images/beef.jpg"
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions, foodCategory) {
    let initialSelectedProductList = [];
    let productListToReturn = [];

    //adding the items based on the restrictions
    for (i = 0; i < restrictions.length; i++) {
        var restriction = restrictions[i];

        for (let x = 0; x < prods.length; x += 1) {
            if ((restriction == "Vegetarian") && (prods[x].vegetarian == true) && (!productListToReturn.includes(prods[x]))) {
                initialSelectedProductList.push(prods[x]);
                productListToReturn.push(prods[x]);
            }
            else if ((restriction == "GlutenFree") && (prods[x].glutenFree == true) && (!productListToReturn.includes(prods[x]))) {
                initialSelectedProductList.push(prods[x]);
                productListToReturn.push(prods[x]);
            }
            else if ((restriction == "Organic") && (prods[x].organic == true) && (!productListToReturn.includes(prods[x]))) {
                initialSelectedProductList.push(prods[x]);
                productListToReturn.push(prods[x]);
            }
        }
    }

    //further filtering items to avoid inconsistencies (i.e vegetarian and organic being selected but still organic beef still showing up)
    for (i = 0; i < restrictions.length; i++) {
        var restriction = restrictions[i];

        for (x = 0; x < initialSelectedProductList.length; x++) {
            if ((restriction == "Vegetarian") && (initialSelectedProductList[x].vegetarian == false) && (productListToReturn.includes(initialSelectedProductList[x]))) {
                productListToReturn.splice(productListToReturn.indexOf(initialSelectedProductList[x]), 1);
            }
            else if ((restriction == "GlutenFree") && (initialSelectedProductList[x].glutenFree == false) && (productListToReturn.includes(initialSelectedProductList[x]))) {
                productListToReturn.splice(productListToReturn.indexOf(initialSelectedProductList[x]), 1);
            }
            else if ((restriction == "Organic") && (initialSelectedProductList[x].organic == false) && (productListToReturn.includes(initialSelectedProductList[x]))) {
                productListToReturn.splice(productListToReturn.indexOf(initialSelectedProductList[x]), 1);
            }
        }
    }

    if (restrictions.length == 0) {
        for (i = 0; i < prods.length; i++) {
            productListToReturn.push(prods[i]);
        }
    }

    if ((foodCategory != '' && foodCategory != 'All')){
        for(i = 0; i < productListToReturn.length; i++){
            if(productListToReturn[i].category != foodCategory){
                delete productListToReturn[i];
            }
        }
    }

    return productListToReturn;
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