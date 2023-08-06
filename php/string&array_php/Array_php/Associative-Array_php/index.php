<?php
// Associative array with string keys
$person = array(
    "name" => "Hamza",
    "age" => 21,
    "country" => "pakistan"
);
// or
$person = [
    "name" => "Hamza",
    "age" => 21,
    "country" => "pakistan"
];

// Accessing elements by key
echo $person["name"]; 
echo $person["age"]; 

// Modifying an element
$person["age"] = 26;
echo $person["age"]; 

// Looping through the associative array
foreach ($person as $key => $value) {
    echo $key . ": " . $value . "<br>";
}





?>