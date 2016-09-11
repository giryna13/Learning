<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <title>Forma</title>

	
</head>
<body>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    	<h1>PHP Form Validation Example</h1>
    	<p>* required field</p>
    	<div>
    		<label for="name">Name:</label>
    		<input id="name" name="name" type="text" required autofocus><span>*</span>
     	</div>
     	<div>
    		<label for="email">E-mail:</label>
    		<input id="email" name="email" type="email" required><span>*</span>
    	</div>
    	<div>
    		<label for="website">Website:</label>
    		<input id="website" name="website" type="url">
    	</div>
    	<div>
    		<label for="comment">Comment:</label>
    		<textarea id="comment" name="comment" rows="5" cols="40"></textarea>
    	</div>
    	<div>
    		<label for="female">Gender:</label>
    		<input id="female" name="gender" type="radio" value="female" required>
    		<label for="female">Female</label>
    		<input id="male" name="gender" type="radio" value="male" required>
    		<label for="male">Male</label><span>*</span>
    	</div>
    	<div>
    		<button id="submit">Submit</button>
    	</div>


    	<?php
    	// define variables and set to empty values
    	$name = $email = $gender = $comment = $website = "";

    	if ($_SERVER["REQUEST_METHOD"] == "POST") {
    	  $name = test_input($_POST["name"]);
    	  $email = test_input($_POST["email"]);
    	  $website = test_input($_POST["website"]);
    	  $comment = test_input($_POST["comment"]);
    	  $gender = test_input($_POST["gender"]);
    	}

    	function test_input($data) {
    	  $data = trim($data);
    	  $data = stripslashes($data);
    	  $data = htmlspecialchars($data);
    	  return $data;
    	}
    	?>

    	<h1>Your Input:</h1>
    	<p>Name: <?php echo $name; ?></p>
    </form>
   

</body>
</html>

