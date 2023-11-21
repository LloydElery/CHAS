<?php
/* While Loop */
echo "with wile: ";
$i = 1;
    while ($i < 10) {
        echo $i . " ";
$i++;
}

/* Do-While Loop */
echo "with do-wile: ";
$i = 1;
do {
    echo $i . " ";
$i++;
} while ($i < 0);

/* For Loop*/
$names = ['Harry', 'Ron', 'Hermione'];
for ($i = 0; $i < count($names); $i++) {
echo $names[$i] . " ";
}

/* For Each Loop */
$names = ['Harry', 'Ron', 'Hermione'];
foreach ($names as $name) {
echo $name . " ";
}

// Få ut array-värdet i 'index' ordningen
foreach ($names as $key => $name) {
echo $key . " -> " . $name . " ";
}
