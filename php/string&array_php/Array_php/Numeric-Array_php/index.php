<?php
// Numeric array with integer values
$numbers = array(1, 2, 3, 4, 5);
// or
$numbers = [1, 2, 3, 4, 5];

// Accessing elements by index
echo $numbers[0]; 
echo $numbers[3]; 

// Modifying an element
$numbers[2] = 10;
echo $numbers[2]; 

// Looping through the array
foreach ($numbers as $num) {
    echo $num . " ";
}

?>