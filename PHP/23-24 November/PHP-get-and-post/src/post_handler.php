<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST Request Handler</title>
</head>
<body>

    <h1>POST Request Handler</h1>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['name'])) {
            $name = htmlspecialchars($_POST['name']);
            echo "<p>Hello, $name! You've submitted a POST request.</p>";
        } else {
            echo "<p>No name submitted via POST request.</p>";
        }
    } else {
        echo "<p>No POST request detected.</p>";
    }
    ?>

    <p><a href="post_index.php">Back to Form</a></p>

</body>
</html>
