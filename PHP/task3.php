<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
    <title>PHP Task 3</title>
    <link rel="stylesheet" type="text/css" href="css/php_task.css"/>
</head>
<body>
    <?php
    //define variables and set to empty values
    $name = $email = "";
    if ($_SERVER["REQUEST_METHOD"] =="POST") {
        $name = test_input($_POST["name"]);
        $email = test_input($_POST["email"]); 
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>
    
    <h2>PHP Form</h2>
    <form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    	Name: <input type="text" name="name">
        <br><br>
    	Email: <input type="text" name="email">
    	<br><br>
    	<input type="submit" name="submit" value="Submit">
    </form>

    <?php 
        echo "<h2>Your Input:</h2>";
        echo $name;
        echo "<br>";
        echo $email; 
    ?>
    
</body>
</html>