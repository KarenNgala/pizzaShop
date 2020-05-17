//business interface logic

var price = function() {
    var pricePizza, priceCrust, priceTopping;
    var priceDelivery = 100;
    if (pizzaSize == "large") {
        pricePizza = 1000;
    } else if (pizzaSize == "medium") {
        pricePizza = 800;
    } else {
        pricePizza = 550;
    };

    if (pizzaCrust == "crispy") {
        priceCrust = 100;
    } else if (pizzaCrust == "stuffed") {
        priceCrust = 200;
    } else {
        priceCrust = 150;
    };

    if (pizzaTopping = 'cheese') {
        priceTopping = 80;
    } else if (pizzaTopping = 'sausage') {
        priceTopping = 50;
    } else if (pizzaTopping = 'mushroom') {
        priceTopping = 100;
    } else if (pizzaTopping = 'bacon') {
        priceTopping = 70;
    };
    var orderTotal = pricePizza + priceCrust + priceTopping;
    return priceDelivery && orderTotal;
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
    $("form#form1").submit(function(event) {
        event.preventDefault();

        //get values from form
        $("select#pizza").on('change', function() {
            var pizzaName = $(this).val();
        });
        $("select#size").on('change', function() {
            var pizzaSize = $(this).val();
        });
        $("select#crust").on('change', function() {
            var pizzaCrust = $(this).val();
        });
        var pizzaTopping = $("input[type='checkbox']").val();
        var order = price(pizzaCrust, pizzaTopping, pizzaSize);
        alert('Your order total is: ' + order);

    });
});