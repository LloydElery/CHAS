<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP forms</title>
</head>

<body>

    <h1>PHP radio buttons</h1>

    <form action="process_form.php" method="POST">
        <label>
            <input type="radio" name="option" value="option1"> Option 1
        </label>
        <br>

        <label>
            <input type="radio" name="option" value="option2"> Option 2
        </label>
        <br>

        <label>
            <input type="radio" name="option" value="option3"> Option 3
        </label>
        <br>

        <label>
            <input type="radio" name="option" value="option4"> Option 4
        </label>
        <br>

        <button type="submit">Submit</button>
    </form>

</body>

</html>