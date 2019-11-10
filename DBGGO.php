<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="mypage2.css">
    <title>Document</title>
</head>
<body>
        <form action="clone.php" method="post">
        <section class="sheet">
                <center>
                        <h1><font size="10" style="color:orange"> <div1 >mosquitone</div1></font></h1>
                        <p1><font size="5" style="color:grey">< Create a set illustration ></font></p1>
                </center>
            <br>
            <br>
        <a4 style="color:white">Drum Setting</a4>
        <table border="1" style="color: white;">
         <tr>
         <td>Snare</td>
         <td>
             <select name="D1">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
             </select>
         </td>
         <td>High Tom</td>
         <td>
             <select id="D2">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
             </select>
         </td>
         </tr>
         <tr>
         <td>Low Tom</td>
         <td>
             <select id="D3">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
             </select>
         </td>
         <td>Floor Tom</td>
         <td>
             <select name="D4">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
             </select>
         </td>
         </tr>
         <tr>
             <td>High Hut</td>
             <td>
                 <select id="K1">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
                 </select>
             
             </td>
             <td>Clash1</td>
             <td>
                 <select id="K2">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
                 </select>
             </td>
         </tr>
         <tr>
             <td>Clash2</td>
             <td>
                 <select id="K3">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
                 </select>
             </td>
             <td>Ride</td>
             <td>
                 <select id="K4">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>None</option>
                 </select>
             </td>
         </tr>
         <tr>
             <td>Kick</td>
             <td>
                 <select id="B1">
                 <option>Not bring in</option>
                 <option>Bring in</option>
                 <option>Bring in(Twin)</option>
                 <option>None</option>
                 </select>
             </td>
             <td>Bass Drum</td>
              <td>
                 <select id="D5">
                     <option>Not bring in</option>
                     <option>Bring in</option>
                     <option>None</option>
                 </select>
              </td>
             </tr>
             <tr>
                     <td>China</td>
                     <td>
                         <select id="D11">
                             <option>None</option>
                             <option>Bring in</option>
                         </select>
                     </td>
                     <td>Splash</td>
                     <td>
                         <select id="D12">
                             <option>None</option>
                             <option>Bring in</option>
                         </select>
                     </td>
                     </tr>
                
         </table>
         <br>
         <a4 style="color:white">Bass Setting</a4>
                         <table border="1" style="color: white;">
                                 <tr>
                                  <td>Head</td>
                                  <td>
                                      <input id="B1" type="text" >
                                 </td>
                                 </tr>
                                 <tr>
                                  <td>Cabi</td>
                                  <td>
                                      <input id="B1" type="text" >
                                  </td>
                                  </tr>
                                  </table>
         </table>
         <br>
     </table>
     <a5 style="color:white">Synthesizer Setting </a5>
                     <table border="1" style="color: white;">
                                             <tr>
                              <td>Name</td>
                                  <td>
                                  <input id="Synth1" type="text" >
                             </td>
                             </tr>
                     </table>
     </table>
     <br>

     <a6 style="color:white">Guiter1 Setting </a6>
              <table border="1" style="color: white;">
                     <tr>
                      <td>Head</td>
                      <td>
                          <input id="Gt11" type="text" >
                     </td>
                     </tr>
                     <tr>
                      <td>Cabi</td>
                      <td>
                          <input id="Gt12" type="text" >
                      </td>
                      </tr>
                      </table>
     </table>
     <br>

     <a6 style="color:white">Guiter2 Setting </a6>
             <table border="1" style="color: white;">
                     <tr>
                      <td>Head</td>
                      <td>
                          <input id="Gt21" type="text" >
                     </td>
                     </tr>
                     <tr>
                      <td>Cabi</td>
                      <td>
                          <input id="Gt22" type="text" >
                      </td>
                     </tr>
             </table>
    </table>
    <br>

    <a7 style="color:white">Other Setting </a7>
         <table border="1" style="color: white;">
         <tr>
         <td>Pluse Set</td>
         <td>
             <input id="OtherSetting" type="text" >
         </td>
         </tr>
     </table>
</table>
<br>
</section>
<center>
<input type=button onclick="location.href='./mypage.html'" value="BEFORE">
<button type="submit" >SETTING</button>
</center>

<?php
//mypage.htmlをPOSTで受け取って値は表示されないままページに保管
$datedata =$_POST['datedata'];
$place =$_POST['place'];
$evntname =$_POST['evntname'];
$BandName =$_POST['BandName'];
$N1 =$_POST['N1'];
$P1 =$_POST['P1'];
$A1 =$_POST['A1'];
$N2 =$_POST['N2'];
$P2 =$_POST['P2'];
$A2 =$_POST['A2'];
$N3 =$_POST['N3'];
$P3 =$_POST['P3'];
$A3 =$_POST['A3'];
$N4 =$_POST['N4'];
$P4 =$_POST['P4'];
$A4 =$_POST['A4'];
$N5 =$_POST['N5'];
$P5 =$_POST['P5'];
$A5 =$_POST['A5'];
$N6 =$_POST['N6'];
$P6 =$_POST['P6'];
$A6 =$_POST['A6'];
$N7 =$_POST['N7'];
$P7 =$_POST['P7'];
$A7 =$_POST['A7'];
$N8 =$_POST['N8'];
$P8 =$_POST['P8'];
$A8 =$_POST['A8'];
$N9 =$_POST['N9'];
$P9 =$_POST['P9'];
$A9 =$_POST['A9'];
$N10 =$_POST['N10'];
$P10 =$_POST['P10'];
$A10 =$_POST['A10'];
echo '<input type="hidden" name="datedata" value="'.$datedata.'">';
echo '<input type="hidden" name="place" value='.$place.'>';
echo '<input type="hidden" name="evntname" value="'.$evntname.'">';
echo '<input type="hidden" name="BandName" value="'.$BandName.'">';
echo '<input type="hidden" name="N1" value="'.$N1.'">';
echo '<input type="hidden" name="P1" value="'.$P1.'">';
echo '<input type="hidden" name="A1" value="'.$A1.'">';
echo '<input type="hidden" name="N2" value="'.$N2.'">';
echo '<input type="hidden" name="P2" value="'.$P2.'">';
echo '<input type="hidden" name="A2" value="'.$A2.'">';
echo '<input type="hidden" name="N3" value="'.$N3.'">';
echo '<input type="hidden" name="P3" value="'.$P3.'">';
echo '<input type="hidden" name="A3" value="'.$A3.'">';
echo '<input type="hidden" name="N4" value="'.$N4.'">';
echo '<input type="hidden" name="P4" value="'.$P4.'">';
echo '<input type="hidden" name="A4" value="'.$A4.'">';
echo '<input type="hidden" name="N5" value="'.$N5.'">';
echo '<input type="hidden" name="P5" value="'.$P5.'">';
echo '<input type="hidden" name="A5" value="'.$A5.'">';
echo '<input type="hidden" name="N6" value="'.$N6.'">';
echo '<input type="hidden" name="P6" value="'.$P6.'">';
echo '<input type="hidden" name="A6" value="'.$A6.'">.';
echo '<input type="hidden" name="N7" value="'.$N7.'">';
echo '<input type="hidden" name="P7" value="'.$P7.'">';
echo '<input type="hidden" name="A7" value="'.$A7.'">';
echo '<input type="hidden" name="N8" value="'.$N8.'">';
echo '<input type="hidden" name="P8" value="'.$P8.'">';
echo '<input type="hidden" name="A8" value="'.$A8.'">';
echo '<input type="hidden" name="N9" value="'.$N9.'">';
echo '<input type="hidden" name="P9" value="'.$P8.'">';
echo '<input type="hidden" name="A9" value="'.$A9.'">';
echo '<input type="hidden" name="N10" value="'.$N10.'">';
echo '<input type="hidden" name="P10" value="'.$P10.'">';
echo '<input type="hidden" name="A10" value="'.$A10.'">';
?>
</form>
</body>
</html>