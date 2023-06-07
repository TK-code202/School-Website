// UI Logic
$(document).ready(function() {
    //Mobile Bar
    $(".fa-bars").click(function() {
        $("#mobile-nav").toggle(1000);
    });


    //Enrollment Page
    $(".print_button").click(function() {
        window.print();
        return false;
    });

    $("#enrollmentCard").submit(function(event) {
        $("#enrollmentCard").hide();
        $(".response_card").show();
        event.preventDefault();
    });
});