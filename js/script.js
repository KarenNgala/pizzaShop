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
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
        }
    }
    return total;
}



// user interface logic
$(document).ready(function() {
    $("#order-online").click(function() {
        $(".view-two").show();
        $(".view-one").hide();

        $("#continue").click(function(event) {
            event.preventDefault();
            $(".view-three").show();
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

        var orderPrice = price(pizzaSize, pizzaCrust, pizzaTopping);
        alert('Your order total is: ' + orderPrice);

    });
});