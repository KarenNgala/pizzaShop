//business interface logic
function Pizza(pizza, size, crust, toppings) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

//calculating price of pizza
var pricePizza, priceCrust;
var priceDelivery = 100;
if (pizzaSize == "large") {
    pricePizza = 1000;
} else if (pizzaSize == "medium") {
    pricePizza = 800;
} else if (pizzaSize == 'small') {
    pricePizza = 550;
} else {
    pricePizza = 0;
};

if (pizzaCrust == "crispy") {
    priceCrust = 100;
} else if (pizzaCrust == "stuffed") {
    priceCrust = 200;
} else if (pizzaCrust == 'gluten') {
    priceCrust = 150;
} else {
    priceCrust = 0;
};

function priceTopping() {
    var input = document.getElementsByName("toppings");
    var total1 = 0;
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total1 += parseFloat(input[i].value);
        }
        if (pizzaSize == 'large') {
            total = total1 * 3;
        } else if (pizzaSize == 'medium') {
            total = total1 * 2;
        } else if (pizzaSize == 'small') {
            total = total1;
        };
    }
    return total;
}

//validate 
if (pricePizza == '0' | priceCrust == '0') {
    alert("Please select a pizza and crust");
}

var pizzaTotal = pricePizza + priceCrust + priceTopping();



// user interface logic
$(document).ready(function() {
    $("#order-online").click(function() {
        $(".view-two").show();
        $(".view-one").hide();

        $("#continue").click(function(event) {
            event.preventDefault();
            $(".order-total").show();
            $(".view-two").hide();
        });
    });
    //continue button
    $("form#form1").submit(function(event) {
        event.preventDefault();

        //get values from form
        let pizzaName = $("#pizza option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = [];
        $.each($("input[name='toppings']:checked"), function() {
            pizzaTopping.push($(this).text());
        });
        console.log(pizzaTopping.join(", "));

    });
});