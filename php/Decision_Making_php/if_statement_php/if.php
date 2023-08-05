<?php

$temperature = 28;
$is_raining = true;

if ($temperature > 30) {
    echo "It's a hot day.";
    if ($is_raining) {
        echo " But it's also raining.";
    }
} else {
    echo "It's not too hot.";
}
?>