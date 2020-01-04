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
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
             </select>
         </td>
         <td>High Tom</td>
         <td>
             <select name="D2">
             <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
             </select>
         </td>
         </tr>
         <tr>
         <td>Low Tom</td>
         <td>
             <select name="D3">
             <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
             </select>
         </td>
         <td>Floor Tom</td>
         <td>
             <select name="D4">
             <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
             </select>
         </td>
         </tr>
         <tr>
             <td>High Hut</td>
             <td>
                 <select name="K1">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
                 </select>
             
             </td>
             <td>Clash1</td>
             <td>
                 <select name="K2">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
                 </select>
             </td>
         </tr>
         <tr>
             <td>Clash2</td>
             <td>
                 <select name="K3">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
                 </select>
             </td>
             <td>Ride</td>
             <td>
                 <select name="K4">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
                 </select>
             </td>
         </tr>
         <tr>
             <td>Kick</td>
             <td>
                 <select name="B1">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>持ち込み(ツイン)</option>
                 <option>不要</option>
                 </select>
             </td>
             <td>Bass Drum</td>
              <td>
                 <select name="D5">
                 <option>持ち込みなし</option>
                 <option>持ち込み</option>
                 <option>不要</option>
                 </select>
              </td>
             </tr>
             <tr>
                     <td>China</td>
                     <td>
                         <select name="D11">
                             <option>不要</option>
                             <option>持ち込み</option>
                         </select>
                     </td>
                     <td>Splash</td>
                     <td>
                         <select name="D12">
                              <option>不要</option>
                        　    <option>持ち込み</option>
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
                                            <select name="Ba01">
                                        　<option>持ち込みなし</option>
                                    　    <option>持ち込み</option>
                                    　　　<option>不要</option>
                                    </select>
                                      <input name="Ba1" type="text" value="MarkBass">
                                 </td>
                                 </tr>
                                 <tr>
                                  <td>Cabi Combo</td>
                                  <td>
                                    <select name="Ba02">
                                          <option>持ち込みなし</option>
                                    　    <option>持ち込み</option>
                                    　　　<option>不要</option>
                                　　</select>
                                      <input name="Ba2" type="text" value="MarkBass">
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
                                  <select name="Synth01">
                                          <option>持ち込みなし</option>
                                    　    <option>持ち込み</option>
                                    　　　<option>不要</option>
                                    </select>
                                  <input name="Synth1" type="text" value="KORG">
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
                         <select name="Gt00">
                              <option>持ち込みなし</option>
                        　    <option>持ち込み</option>
                        　　　<option>不要</option>
                         </select>
 
                          <input name="Gt11" type="text" >
                     </td>
                     </tr>
                     <tr>
                      <td>Cabi Combo</td>
                      <td>
                      <select name="Gt01"> 
                              <option>持ち込みなし(Cabi)</option>
			　    <option>持ち込み(Cabi)</option>
                              <option>持ち込みなし(Combo)</option>
                        　    <option>持ち込み(Combo)</option>
                        　　　<option>不要</option>                         </select>
                          <input name="Gt12" type="text" value="Marshall">
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
		      <select name="Gt02">
                              <option>持ち込みなし</option>
                        　    <option>持ち込み</option>
                        　　　<option>不要</option>
                         </select>
                          <input name="Gt21" type="text" value="Jazz Chorus">
                     </td>
                     </tr>
                     <tr>
                      <td>Cabi Combo</td>
                      <td>
                      <select name="Gt03">
                              <option>持ち込みなし(Cabi)</option>
			　    <option>持ち込み(Cabi)</option>
                              <option>持ち込みなし(Combo)</option>
                        　    <option>持ち込み(Combo)</option>
                        　　　<option>不要</option>
                         </select>
                          <input name="Gt22" type="text" value="Jazz Chorus">
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
             <input name="OtherSetting" type="text" >
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
<?php require('./POST_data.php');?>
</form>
</body>
</html>