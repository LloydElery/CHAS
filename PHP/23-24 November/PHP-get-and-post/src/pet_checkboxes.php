<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP forms</title>
</head>

<body>

    <h1>PHP pet checkboxes</h1>

    <form action="process_pet_form.php" method="POST">
        <label>
            <input type="checkbox" name="pets[]" value="Cat"> Cat
        </label>
        <br>

        <label>
            <input type="checkbox" name="pets[]" value="Dog"> Dog
        </label>
        <br>

        <label>
            <input type="checkbox" name="pets[]" value="Fish"> Fish
        </label>
        <br>

        <button type="submit">Submit</button>
    </form>

</body>

</html>