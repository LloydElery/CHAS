<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Request Demo</title>
</head>
<body>

    <h1>GET Request Demo</h1>

    <form action="get_handler.php" method="get">
        <label for="name">Enter your name:</label>
        <input type="text" name="name">
        <button type="submit">Submit</button>
    </form>

    // action="get_handler.php" - Länkar till get_handler.php filen
    // method="get" - Vilken metod vi använder
    // for="name"
    // type="text"
    // name="name"
    // type="submit" - Kör 'action=" "' vid submit event. 

</body>
</html>
