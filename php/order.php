<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $product = $_POST['product-name'];
    $quantity = $_POST['quantity'];
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $phone = $_POST['phone'];
    $message = "Product=$product\nQuantity=$quantity\nPhone=$phone\nAddress Line 1=$address1\nAddress Line 2=$address2";
    $from = 'From: Calf Pacifier Customer';
    $to = 'calfpacifier@gmail.com';
    $subject = 'Order from Customer';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if($_POST['submit']){
        if(echo mail($to, $subject, $body, $from)){
            echo '<p>Your Message Has Been Sent. You will receive a call within the next 24 hours to confirm your order and finish the details. Thank you!</p>';
        }else{
            echo '<p>We are very sorry, but we encountered a problem.</p>';
        }
    }
?>
