<?php

$x = 100;
$y = 50;

if ($x == 100 and $y == 50) {
    echo "Hello world!","<br>";
}

if ($x == 100 or $y == 80) {
    echo "Hello!","<br>";
}

if ($x == 100 xor $y == 80) {
    echo "Hi!","<br>";
}

if ($x == 100 && $y == 50) {
    echo "Hello world!","<br>";
}

if ($x == 100 || $y == 80) {
    echo "Hello!","<br>";
}

if (!($x == 100 and $y == 50)) {
    echo "Hi!","<br>";
}



?>