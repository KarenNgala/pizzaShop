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

    });
});