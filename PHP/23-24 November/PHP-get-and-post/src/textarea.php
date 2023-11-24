<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Textarea Form</title>
</head>

<body>

    <h1>Enter Your Message</h1>

    <form action="textarea.php" method="POST">
        <label for="message">Your Message:</label>
        <textarea id="message" name="message" rows="10" cols="100"></textarea>
        <br>
        <button type="submit">Submit</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['message'])) {
            $enteredMessage = htmlspecialchars($_POST['message']);
            echo "<h3>Your entered message:</h3>";
            echo "<p>$enteredMessage</p>";
        } else {
            echo "<p>No message entered.</p>";
        }
    }
    ?>

</body>

</html>