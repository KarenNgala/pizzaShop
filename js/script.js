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
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        //get values from form
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
    });
});