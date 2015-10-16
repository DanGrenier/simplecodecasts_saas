$(document).ready(function(){
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    //Watch for form submission
    $("form-submit-btn").click(function(event){
        event.preventDefault();    //prevent the default behavior of clicking on submit button
        $('input[type=submit]').prop('disabled', true);  //disables the button
        var error = false;
        var ccNum = $('#card_number').val();
        var cvcNum = $('#card_code').val();
        var expMonth = $('#card_month').val();
        var expYear = $('#card_year').val();
        
        if (!error) {
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
                },stripeResponseHandler);
        }
    }); //form submission
    
    
    function stripeResponseHandler(status,response)
    {
        //Get reference to the form
        var f = $("#new_user");
        
        //Get the token response
        var token = response.id;
        
        //Add token to the hidden field on form
        f.append('<input type="hidden" name="user[stripe_card_token" value="'+token+'" />');
        
        f.get(0).submit();
        
    }
});