<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Calf Pacifier Customer';
    $to = 'calfpacifier@gmail.com';
    $subject = 'Customer Message';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if($_POST['submit']){
        if(mail($to, $subject, $body, $from)){
            echo '<p>Your Message Has Been Sent</p>';
        }else{
            echo '<p>We are very sorry, but we encountered a problem.</p>';
        }
    }
?>