<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet example</title>
</head>

<body>

    <h2>Your Result</h2>

    <?php
    if (isset($_POST['pets'])) {
        $pets = $_POST["pets"];
        if (empty($pets)) {
            echo "No pets selected";
        } else {
            $amountOfPets = count($pets);

            echo "You selected $amountOfPets pets: ";
            // for ($j = 0; $j < $i; $j++) {
            //     echo ($pets[$j] . ", ");
            // }
            foreach ($pets as $pet) {
                echo "$pet <br>";
            }
        }
    } else {
        echo "No selected pets from form";
    }
    ?>

</body>

</html>