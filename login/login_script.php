<?php

$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

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
		$gender = "Gender is required";
	} else {
		$gender = test_input($_POST["gender"]);
	}
}

function tes-input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

echo "<ul>";
echo "<li>" . $_POST["firstname"] . "</li>";
echo "<li>" . $_POST["lastname"] . "</li>";
echo "<li>" . $_POST["sex"] . "</li>";
echo "<li>" . $_POST["email"] . "</li>";
echo "<li>" . $_POST["website"] . "</li>";

if (empty($_POST["remember"])) {
	echo "<li>False</li>";
}
else {
	echo "<li>" . $_POST["remember"] . "</li>";
}
echo "<li>" . $_POST["cars"] . "</li>";
echo "<li>" . $_POST["comment"] . "</li>";
echo "<li>" . $_POST["browsers"] . "</li>";

echo "</ul>";
?>