<html>
    <head>
    <meta charset="UTF-8">
        <link rel="stylesheet" href="table_trtd.css">
    </head>
<body>
<center>
    <br>
<table border="2"  class="OutputTable">
 <tr>
  <td bgcolor="#FFFF00">Date</td>
  <td colspan="5"><?php print($_POST["datedata"]);?></td>
  <td colspan="2" bgcolor="#FFFF00">EventName</td>
  <td colspan="7">
      <?php 
       if (isset($_POST["evntname"])) {
        $EVENTNAME = $_POST["evntname"];
        }
      /*if (isset($_POST["place"])) {　//意味わからん
        $EVENTPLACE = $_POST["place"];
        }*/
      print $EVENTNAME;
      ?>
  </td>
 </tr>

 <tr>
     <td width="200" hight="400"></td>
 </tr>
 <tr>
  <td colspan="2" bgcolor="#FFFF00">メンバー(member)</td>
</tr>
<tr>
  <td colspan="3">名前(name)</td>
  <td colspan="2">パート(part)</td>
  <td colspan="4">アドレス(adress)</td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="3"></td>
  <td colspan="2"></td>
  <td colspan="4"></td>
 </tr>
 <tr>
  <td colspan="9" rowspan="2"></td>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2">Drum(ドラム):</td>

 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2">Bass(ベース):</td>
 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2">Guitar1(ギター1):</td>
 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2">Guitar2(ギター2):</td>
 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
 <tr>
  <td colspan="2">Keyboad(キーボード):</td>
 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
 <tr>
  <td>その他:</td>
 </tr>
 <tr>
  <td colspan="9" rowspan="3"></td>
 </tr>
 <tr>
 </tr>
 <tr>
 </tr>
</table>
<br>
<input type="button" value="PDF DOWNLOAD">
</center>

</body>
</html>