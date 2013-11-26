<?php
function check_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
		$data = strip_tags($data);
    return $data;
}

if(isset ($_POST['name'])) {
	$to = "jon.kuperman@gmail.com";
	$subject = check_input($_POST['name']) . " - Kuperman Inquiry";
	$message = check_input($_POST['message']);
	$from = check_input($_POST['email']);
	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers);
	echo "Email sent successfully! I'll get back to you soon.";
	die();
}
?>