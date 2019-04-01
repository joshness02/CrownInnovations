<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Calf Pacifier Customer';
    $to = 'joshness02@icloud.com';
    $subject = 'Customer Message';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if($_POST['submit']){
        /*
        if(){
            echo '<p>Your Message Has Been Sent</p>';
        }else{
            echo '<p>We are very sorry, but we encountered a problem.</p>';
        }*/
        echo mail($to, $subject, $body, $from);
    }
?>
