//business interface logic
var priceSize, priceCrust, priceTopping;

function Pizza(pizza, size, crust, toppings) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

//calculate pizza price
var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "0":
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
        case "0":
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
        priceTopping = pizzaTopping * 3;
    } else if (pizzaSize == 'medium') {
        priceTopping = pizzaTopping * 2;
    } else if (pizzaSize == 'small') {
        priceTopping = pizzaTopping;
    }

    return priceCrust, priceSize, priceTopping;
}

// user interface logic
$(document).ready(function() {
    $("#order-online").click(function() {
        $(".view-two").show();
        $(".view-one").hide();
    })
    $("#continue").click(function() {
        //get form values
        let pizzaName = $("#pizza option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = parseInt([]);
        $("input:checkbox[name=toppings]:checked").each(function() {
            pizzaTopping.push($(this).val());
        });

        price(pizzaSize, pizzaCrust, pizzaTopping);
        var total = priceSize + priceCrust + priceTopping;
        alert("Your order total is: " + total);

        var order = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping)

    })
})