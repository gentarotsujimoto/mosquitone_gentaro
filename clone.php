<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="sheet1.css">
    <title>Document</title>
</head>
<body>
    <section class="sheet">
        <h1 class="text-left">Band Name:
            <a1><?php print("".$_POST["BandName"]);?></a1>
        </h1>
        <h2 class="text-right">Date:
            <?php print($_POST["datedata"]);?>
        </h2>
        <h3 class="text-right">
                <?php print($_POST["place"]);?>
        </h3>
        <div class="row_1">
            <h4 class="text-center">
                <?php print($_POST["evntname"]);?>
            </h4>
        </div>
        <br>
        <div class="square"></div>
    </section>
    
</body>
</html>
