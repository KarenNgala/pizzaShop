//business interface logic
var priceSize, priceCrust, priceTopping;

//calculate pizza price
var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
            priceSize = 1000;
            break;
        case "medium":
            priceSize = 800;
            break;
        case "small":
            priceSize = 550;
        default:
            alert("Please select a pizza size");
    }

    switch (pizzaCrust) {
        case "":
            priceCrust = 0;
            break;
        case "crispy":
            priceCrust = 100;
            break;
        case "stuffed":
            priceCrust = 200;
            break;
        case "gluten":
            priceCrust = 150;
        default:
            alert("Please choose a crust");
    }

    if (pizzaSize == 'large') {
        priceTopping = 150;
    } else if (pizzaSize == 'medium') {
        priceTopping = 100;
    } else if (pizzaSize == 'small') {
        priceTopping = 50;
    }

    var pizzaTotal = priceSize + priceCrust + priceTopping;
    return pizzaTotal;
}

// user interface logic
$(document).ready(function() {
    $("#order-online").click(function() {
        $(".view-two").show();
        $(".view-one").hide();
    })

    $("#continue").click(function(event) {
        event.preventDefault();
        $(".view-three").show();
        $(".view-two").hide();
        //get form values
        let pizzaName = $("#pizza option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = [];
        $("input:checkbox[name=toppings]:checked").each(function() {
            pizzaTopping.push($(this).val());
        });

        var total = price(pizzaSize, pizzaCrust, pizzaTopping);
        $(".current-order").append('<tr><td id="name">' + pizzaName + '</td><td id="size">' + pizzaSize + '</td><td id="crust">' + pizzaCrust + '</td><td id="toppings">' + pizzaTopping + '</td><td id="total">' + total);
    })

    $("#delivery").click(function() {
        $(".view-four").show();
    })

    $("#pick-up").click(function() {
        alert("Dear customer, your order will be ready for pickup in 1 hour")
    })
})