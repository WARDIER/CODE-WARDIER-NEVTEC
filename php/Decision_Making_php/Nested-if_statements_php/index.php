<?php


$age = 25;
$is_student = false;

if ($age >= 18) {
    echo "You are an adult.","<br>";

    if ($is_student) {
        echo " You are a student.","<br>";
    } else {
        echo " You are not a student.","<br>";
    }
} else {
    echo "You are a minor.","<br>";
}




?>