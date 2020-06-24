// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{3}-\d{3}-\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(cardNumber) {
    var a = document.getElementById(cardNumber).value;
    var filter = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDatesJack = [0,5,6];
var unavailableDatesAlex = [0,1,6];
var unavailableDatesRomeo = [0,2,3,6];
// var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var barberChosen = document.getElementById("barbersSelect").value;

    if(date.getDay() == 0 || date.getDay() == 6){
        return [false];
    }

    if(barberChosen == 'Jack'){
        if(unavailableDatesJack.includes(date.getDay())){
            return [false];
        }
    }

    if(barberChosen == 'Alex'){
        if(unavailableDatesAlex.includes(date.getDay())){
            return [false];
        }
    }

    if(barberChosen == 'Romeo'){
        if(unavailableDatesRomeo.includes(date.getDay())){
            return [false];
        }
    }

    return [true];
}

$(document).ready(function () {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#telephoneNumber").on("change", function () {
        if (!validatePhone("telephoneNumber")) {
            alert("Wrong format for phone");
            $("#telephoneNumber").addClass("error");
        }
        else {
            $("#telephoneNumber").removeClass("error");
        }
    });

    $("#creditCard").on("change", function () {
        if (!validateCreditCard("creditCard")) {
            alert("Wrong format for creditCard");
            $("#creditCard").addClass("error");
        }
        else {
            $("#creditCard").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $("#dateInput").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: '-0d',
            maxDate: '+1M',
            // used to disable some dates
            //beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Make sure everything is filled out
    $("#submitBtn").click(function(){
        var checkboxesDiv = document.getElementById("servicesCheckboxes");
        var checkboxes = checkboxesDiv.getElementsByTagName('input');
        var hasSelectedAService = false;

        for (i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked){
               hasSelectedAService = true;
            }
        }

        if(!hasSelectedAService){
            alert("Please select at least one service");
        }
    })


});
