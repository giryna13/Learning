<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="css/task5.css">
	<title>Task 5</title>
</head>

<body>
	
	<?php
	//define variables and set to empty values
	$nameerr = $emailErr = $genderErr = "";
	$name = $email = $gender = $comment = $website = $skype = $phonenumber = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["name"])) {
			$nameErr = "Name is required";
		} else {
			$name = test_input($_POST["name"]);
		}

		if (empty($_POST["email"])) {
			$emailErr = "Email is required";
		} else {
			$email = test_input($_POST["email"]);
		}

		if (empty($_POST["website"])) {
			$website = "";
		} else {
			$website = test_input($_POST["website"]);
		}

		if (empty($_POST["comment"])) {
			$comment = "";
		} else {
			$comment = test_input($_POST["comment"]);
		}

		if (empty($_POST["gender"])) {
			$genderErr = "Gender is required";
		} else {
			$gender = test_input($_POST["gender"]);
		}

		if (empty($_POST["skype"])) {
			$skype = "";
		} else {
			$skype = test_input($_POST["skype"]);
		}

		if (empty($_POST["phonenumber"])) {
			$phonenumber = "";
		} else {
			$phonenumber = test_input($_POST["phonenumber"]);
		}
	}

	function test_input($data) {
		$data = trim($data);
		$ldata = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	?>

	<h2>PHP Form Validation</h2>
	<p><span class="error">* required field.</span></p>
	
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		
		Name: <input type="text" name="name">
		<span class="error">* <?php echo $nameErr;?></span>
		<br><br>
		
		E-mail: <input type="text" name="email">
		<span class="error">* <?php echo $emailErr;?></span>
		<br><br>

		Website: <input type="text" name="website">
		<br><br>

		Comment: <textarea name="comment" row="5" cols = "40"></textarea>
		<br><br>

		Gender:
		<input type="radio" name="gender" value="female">Female
		<input type="radio" name="gender" value="male">Male
		<span class="error">* <?php echo $genderErr;?></span>
		<br><br>

		Skype: <input type="text" name="skype">
		<br><br>

		Phone Number: <input type"text" name="phonenumber">
		<br><br>
		<input type="submit" name="submit" value="Submit">

	</form>

	<?php
	echo "<h2>Your Input:</h2>";
	echo $name;
	echo "<br>";
	echo $email;
	echo "<br>";
	echo $website;
	echo "<br>";
	echo $comment;
	echo "<br>";
	echo $gender;
	echo "<br>";
	echo $skype;
	echo "<br>";
	echo $phonenumber;
	?>

</body>
</html>