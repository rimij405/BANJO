<?php
$errors = array(); // array to hold validation errors.
$data = array(); // array to pass back data.

// Validate the variables -------------------------------
    // if any of these variables don't exist, add to $errors.
    
    if(empty($_POST['first_name']))
        $errors['first_name'] = 'Your first name is required.';
        
    if(empty($_POST['last_name']))
        $errors['last_name'] = 'Your last name is required.';
        
    if(empty($_POST['email']))
    {
        $errors['email'] = 'Email is required.';
    }
    else
    {        
        if( ! filter_var($email, FILTER_VALIDATE_EMAIL)){
            $errors['email'] = 'A valid email address is required.';
        }
    }
        
    if(!empty($_POST['mobile_phone']))
    {
        $regex = "/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i";
        if( ! preg_match( $regex, $_POST['mobile_phone'])){
            $errors['mobile_phone'] = 'A valid phone number is required, if entering a phone number.';
        }
    }
        
        
    if(empty($_POST['work-type']))
    {
        $errors['worktype'] = 'Please provide what subject this message pertains to.';
    }
    else
    {
        $regex2 = "";
        if( ! preg_match( $regex2, $_POST['work-type'])){
            $errors['work-type'] = 'Please provide what subject this message pertains to.';
        }
    }
    
    if(empty($_POST['message']))
        $errors['message'] = 'A message is required.';
        
        
// Return a response.
    // if there are any errors in our errors array, return a boolean.
    if(!empty($errors)){
        
        // If there are items in our errors array, return those errors.
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        // If there are no errors, process the form and return a message.
                
        $firstName = $_POST['first_name'];
        $lastName = $_POST['last_name'];
        $name = "$firstName $lastName";
        
        $email = $_POST['email'];
        $companyName = $_POST['company_name'];
        $phone = $_POST['mobile_phone'];
        $workType = $_POST['work-type'];
        $message = $_POST['message'];
        $formcontent = "From: $name \n Company: $companyName \n Tel. Phone: $phone \n Message: $message";
        $recipient = "effendiian+contactform@gmail.com";
        $subject = "Contact Form: $workType";
        $mailheader = "From: $email \r\n";
        mail($recipient, $subject, $formcontent, $mailheader) or die("The email could not be sent!");
        
        // Show a message of success and provide a true success variable.
        $data['success'] = true;
        $data['message'] = 'Your email has been sent successfully!';
    }
    
    echo json_encode($data);
?>