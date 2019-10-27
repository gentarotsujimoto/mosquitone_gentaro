<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="sheet.css">
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
        <h5>Set Set Illustration:</h5>
        <div class="square"></div>
        
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
                        <td class="text-center"><?php print("".$_POST["membername[1]"]);?></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"><?php print("".$_POST["membername[2]"]);?></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                    </tbody>
            </table>
    </div>
    </section>
</body>
</html>
