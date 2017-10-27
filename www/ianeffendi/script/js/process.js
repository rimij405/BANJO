// process.js
$(document).ready(function(){
    
    // Process the form.
    $('form').submit(function(event){
                
        $('.form-group').removeClass('has-error'); // remove the error class
        $('.alert__block').remove(); // remove the error text
    
        // Get the form data.
        // There are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'firstname'          : $('input[name=first_name]').val(),
            'lastname'           : $('input[name=last_name]').val(),
            'company'            : $('input[name=company_name]').val(),
            'email'              : $('input[name=email]').val(),
            'phone'              : $('input[name=mobile_phone]').val(),     
            'work-type'          : $('input[name=work-type]').val(),
            'message'            : $('input[name=message]').val()
        };
        
        // process the form
        $.ajax({
            type            : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url             : 'mail.php', // the url where we want to POST
            data            : formData, // our data object
            dataType        : 'json', // what type of data do we expect back from the server.
            encode          : true
        })
        
            // using the done promise callback.
            .done(function(data){
                // Log data to the console so we can see.
                console.log(data);
                
                // Here we will handle errors and validation messages.
                if (!data.success) {
                    
                    // Handle errors for name.
                    if (data.errors.first_name) {
                        $('#firstname-group').addClass('has-error'); // Add the error class to show red input.
                        $('#firstname-group').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Oh snap!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.first_name
                                          + '</span></div></div>'); // Add the actual error message under our input.
                    }
                    
                    if (data.errors.last_name) {
                        $('#lastname-group').addClass('has-error'); // Add the error class to show red input.
                        $('#lastname-group').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Oh gosh!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.last_name
                                          + '</span></div></div>'); // Add the actual error message under our input.
                    }
                    
                    // Handle errors for phone errors, if any.
                    if (data.errors.mobile_phone) {
                        $('#phone-group').addClass('has-error'); // Add the error class to show red input.
                        $('#phone-group').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Oh gosh!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.mobile_phone
                                          + '</span></div></div>'); // Add the actual error message under our input.
                    }
                    
                    // Handle errors for email.
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); // Add the error class to show red input.
                        $('#email-group').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Oh no!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.email
                                          + '</span></div></div>'); //Add the actual error messages.
                    }
                    
                    // Handle errors for dropdown.                    
                    if (data.errors.worktype) {
                        $('#work-group').addClass('has-error'); // Add the error class to show red input.
                        $('#work-group').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Dang it!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.worktype
                                          + '</span></div></div>'); //Add the actual error messages.
                    }
                                        
                    // Handle errors for message.                                      
                    if (data.errors.message) {
                        $('#message').addClass('has-error'); // Add the error class to show red input.
                        $('#message').append('<div class="alert__block">'
                                          + '<div class="alert alert-dismissible alert-danger">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Dang it!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.errors.message
                                          + '</span></div></div>'); //Add the actual error messages.
                    }
                    
                } else {
                    // All good! Show the success message!
                    $('form').append('<div class="alert alert-dismissible alert-success">'
                                          + '<button type="button" class="close" data-dismiss="alert">'
                                          + '&times;'
                                          + '</button>'
                                          + '<strong>Alright!</strong>'
                                          + '<span style="text-decoration:underline;">'
                                          + data.message
                                          + '</span></div>'); //Add the actual error messages. 
                }
            })            
            
            // using the fail promise callback
            .fail(function(data){

                // show any errors
                // best to remove for production
                console.log(data);
            });
    
        // stop the form from submitting the normal way and refreshing the page.
        event.preventDefault();    
    });
});