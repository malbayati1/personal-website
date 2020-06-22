$(document).ready(function() {
    $("#construction").click(function() {
        $(this).hide();
    });

    // This is for the second iteration of the website
    // $('#submitButton').click(function(event) {
    //     event.preventDefault()

    //     let email = $("#emailInput").val();
    //     let subject = $("#subject").val();
    //     let message = $("#message").val();
    //     // let statusElement = $('#status');
    //     // statusElement.empty();

    //     if(email.length > 5 && email.includes('@') && email.includes('.')) {

    //     } else {
    //         // statusElement.append("<div>Please enter a vaild email address</div>");
    //         alert("Please enter a valid email address");aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    //     }
    // })

    $(".headerButton").click(function() {
        $('body, html').scrollTop($("#" + this.name).offset().top)
    });
});