<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>PHP Task 4</title>
</head>

<body>
	
	<?php
	$fruits = array("Blueberry", "Cherry", "Apple", "Banana");
	$arrlength = count($fruits);
    echo "<ul>";
	for($x = 0; $x < $arrlength; $x++) {
	    echo "<li>" . $fruits[$x] . "</li>";
	}
	echo "</ul>";
	?>

</body>
</html>