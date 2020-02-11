<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/sheet1.css">
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
    <div class="row_5">
            <table class="detail">
                <thead>
                    <tr>
                        <th class="item">Songs</th>
                        <th class="amount">Request</th>
                    </tr>
                </thead>
                <tbody>
                <tr class="dataline">
                        <td class="text-left">1.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">2.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">3.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">4.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">5.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">6.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">7.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">8.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">9.<input type="text" size="30"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                    <tr class="dataline">
                        <td class="text-left">10.<input type="text" size="29"></td>
                        <td class="text-left"><input type="text" size="34"></td>
                    </tr>
                </tbody>
            </table>
            <br>
            <a2>Drum:</a2>
            <center><textarea name="freeans" rows="3" cols="76">自由に意見を記述してください</textarea></center>
            <a2>Bass:</a2>
            <center><textarea name="freeans" rows="3" cols="76">自由に意見を記述してください</textarea></center>
            <a2>Guitar1:</a2>
            <center><textarea name="freeans" rows="3" cols="76">自由に意見を記述してください</textarea></center>
            <a2>Guitar2:</a2>
            <center><textarea name="freeans" rows="3" cols="76">自由に意見を記述してください</textarea></center>
    </div>
    </section>
</body>
</html>