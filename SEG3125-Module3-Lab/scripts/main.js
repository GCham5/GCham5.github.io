// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var chosenProducts = [];

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}
    
function initialPopulate(){
    populateListProductChoices("dietInfo", "foodCat", "displayProduct");
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3) {
    var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	
	// s3 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";

	var checkboxes = s1.getElementsByTagName('input');
	var radioBtns = s2.getElementsByTagName('input');
	var dietSelectionList = [];
	var foodCategory = '';

    for (i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked){
            dietSelectionList.push(checkboxes[i].value);
        }
	}
	
	for (i = 0; i < radioBtns.length; i++) {
        if(radioBtns[i].checked){
            foodCategory = radioBtns[i].value;
        }
    }
		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, dietSelectionList, foodCategory);
	
	//sorting by price
	optionArray.sort(function(prod1, prod2) {
		var price1 = prod1.price;
		var price2 = prod2.price;

		if(price1 < price2){
			return -1;
		}else if (price1 > price2){
			return 1;
		}

		return 0;
	})

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var product = optionArray[i];


		var productCard = document.createElement('div');
		productCard.className += "productCard";

		var title = document.createElement('h3');
		title.textContent = productName;

		var image = document.createElement("img");
		image.src = optionArray[i].image;

		var price = document.createElement('p');
		price.textContent = productPrice;

		var addBtn = document.createElement('button');
		addBtn.textContent = "Add to cart";

		// code inspired by StackOverflow
		addBtn.setAttribute("onclick", selectedItems(product));


		s3.appendChild(productCard);
		productCard.appendChild(title);
		productCard.appendChild(image);
		productCard.appendChild(price);
		productCard.appendChild(addBtn);


		// var checkbox = document.createElement("input");
		// checkbox.type = "checkbox";
		// checkbox.name = "product";
		// checkbox.value = productName;
		// s3.appendChild(checkbox);
		
		// // create a label for the checkbox, and also add in HTML DOM
		// var label = document.createElement('label')
		// label.htmlFor = productName;
		// label.appendChild(document.createTextNode(productName));
		// s3.appendChild(label);

		// var priceLabel = document.createElement('label');
		// priceLabel.htmlFor = productName;
		// priceLabel.appendChild(document.createTextNode(" - $" + productPrice));
		// s3.appendChild(priceLabel);
		
		// create a breakline node and add in HTML DOM
		s3.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(product){

	if(!chosenProducts.includes(product)){
		chosenProducts.push(product);
	}
		
}


// This function is called when the "Cart" button is clicked
// It will display the cart in a modal
function openModal() {

	populateCart();

	var cartModal = document.getElementById("cartModal");
	cartModal.style.display = "block";
}

// This function is called when the "Cart" close button is clicked
// It will close the cart modal
function closeModal(){
	var cartModal = document.getElementById("cartModal");
	cartModal.style.display = "none";
}

// This function is called to populate the cart with chosenProducts
function populateCart() {

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var prodDiv = document.createElement("div");
	prodDiv.id = "cartItems";

	for(i = 0; i < chosenProducts.length; i++){
		prodDiv.appendChild(document.createTextNode(chosenProducts[i].name));
		prodDiv.appendChild(document.createElement("br"));
	}

	c.appendChild(prodDiv);
	c.appendChild(document.createTextNode("Total Price is  " + getTotalPrice(chosenProducts)));
}
