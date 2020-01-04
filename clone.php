<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="sheet1.css">
    <title>Set Illustration</title>
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
        <h5>Set Set Illustration:</h5>
        <div class="square">
            <canvas>Not　Canvas</canvas>
        <?php require('./POST_data.php');?>
        <script src="DBGV.js"></script>
        </div>
        
    <br>
        <h6>Member:</h6>
    <div class="row_5">
            <table class="detail">
                <thead>
                    <tr>
                        <th class="item">Name</th>
                        <th class="unit_price">Part</th>
                        <th class="amount">Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N1"]);?></td>
                        <td class="text-center"><?php print($_POST["P1"]);?></td>
                        <td class="text-center"><?php print($_POST["A1"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N2"]);?></td>
                        <td class="text-center"><?php print($_POST["P2"]);?></td>
                        <td class="text-center"><?php print($_POST["A2"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N3"]);?></td>
                        <td class="text-center"><?php print($_POST["P3"]);?></td>
                        <td class="text-center"><?php print($_POST["A3"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N4"]);?></td>
                        <td class="text-center"><?php print($_POST["P4"]);?></td>
                        <td class="text-center"><?php print($_POST["A4"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N5"]);?></td>
                        <td class="text-center"><?php print($_POST["P5"]);?></td>
                        <td class="text-center"><?php print($_POST["A5"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N6"]);?></td>
                        <td class="text-center"><?php print($_POST["P6"]);?></td>
                        <td class="text-center"><?php print($_POST["A6"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N7"]);?></td>
                        <td class="text-center"><?php print($_POST["P7"]);?></td>
                        <td class="text-center"><?php print($_POST["A7"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N8"]);?></td>
                        <td class="text-center"><?php print($_POST["P8"]);?></td>
                        <td class="text-center"><?php print($_POST["A8"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N9"]);?></td>
                        <td class="text-center"><?php print($_POST["P9"]);?></td>
                        <td class="text-center"><?php print($_POST["A9"]);?></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print($_POST["N10"]);?></td>
                        <td class="text-center"><?php print($_POST["P10"]);?></td>
                        <td class="text-center"><?php print($_POST["A10"]);?></td>
                    </tr>
                    </tbody>
            </table>
    </div>
    </section>
</body>
</html>