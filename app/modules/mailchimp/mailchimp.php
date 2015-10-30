<html>
<body>
	Welcome <?php echo $_POST["name"]; ?><br>
	Your email address is: <?php echo $_POST["email"]; ?>

	<?php if (isset($_REQUEST['email'])){ //if "email" is filled out, send email
		//send email
		$email = $_REQUEST['email'] ;
		$subject = $_REQUEST['subject'] ;
		$message = $_REQUEST['message'] ;
		mail("someone@example.com", $subject,
		$message, "From:" . $email);
		echo "Thank you for using our mail form";
	} else { //if "email" is not filled out, display the form
		echo "<form method='post' action='app/modules/mailchimp/mailchimp.php'>
			Email: <input name='email' type='text' /><br />
			Subject: <input name='subject' type='text' /><br />
			Message:<br />
			<textarea name='message' rows='15' cols='40'>
			</textarea><br />
			<input type='submit' />
		</form>";
	}?>
</body>
</html>