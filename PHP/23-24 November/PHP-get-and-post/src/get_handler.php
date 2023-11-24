<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Request Handler</title>
</head>
<body>

    <h1>GET Request Handler</h1>

    <?php
    if (isset($_GET['name'])) {
        $name = htmlspecialchars($_GET['name']);
        echo "<p>Hello, $name! You've submitted a GET request.</p>";
    } else {
        echo "<p>No name submitted via GET request.</p>";
    }
    ?>

    <p><a href="index.php">Back to Form</a></p>

</body>
</html>
