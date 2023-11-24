<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown example</title>
</head>

<body>

    <h2>Dropdown example</h2>

    <?php

    if (isset($_GET['country'])) {
      $country = htmlspecialchars($_GET['country']);
      echo $country;
    }
    ?>

</body>

</html>