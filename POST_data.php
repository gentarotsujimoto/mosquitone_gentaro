<?php
ini_set('display_errors', 0);//画面推移時にエラーを表示させない
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
echo '<input type="hidden" name="A6" value="'.$A6.'">';
echo '<input type="hidden" name="N7" value="'.$N7.'">';
echo '<input type="hidden" name="P7" value="'.$P7.'">';
echo '<input type="hidden" name="A7" value="'.$A7.'">';
echo '<input type="hidden" name="N8" value="'.$N8.'">';
echo '<input type="hidden" name="P8" value="'.$P8.'">';
echo '<input type="hidden" name="A8" value="'.$A8.'">';
echo '<input type="hidden" name="N9" value="'.$N9.'">';
echo '<input type="hidden" name="P9" value="'.$P9.'">';
echo '<input type="hidden" name="A9" value="'.$A9.'">';
echo '<input type="hidden" name="N10" value="'.$N10.'">';
echo '<input type="hidden" name="P10" value="'.$P10.'">';
echo '<input type="hidden" name="A10" value="'.$A10.'">';

//ドラムセッティング
$D1 =$_POST['D1'];
$D2 =$_POST['D2'];
$D3 =$_POST['D3'];
$D4 =$_POST['D4'];
$K1 =$_POST['K1'];
$K2 =$_POST['K2'];
$K3 =$_POST['K3'];
$K4 =$_POST['K4'];
$B1 =$_POST['B1'];
$D5 =$_POST['D5'];
$D11 =$_POST['D11'];
$D12 =$_POST['D12'];
echo '<input type="hidden" id="D1" value="'.$D1.'">';
echo '<input type="hidden" id="D2" value="'.$D2.'">';
echo '<input type="hidden" id="D3" value="'.$D3.'">';
echo '<input type="hidden" id="D4" value="'.$D4.'">';
echo '<input type="hidden" id="K1" value="'.$K1.'">';
echo '<input type="hidden" id="K2" value="'.$K2.'">';
echo '<input type="hidden" id="K3" value="'.$K3.'">';
echo '<input type="hidden" id="K4" value="'.$K4.'">';
echo '<input type="hidden" id="B1" value="'.$B1.'">';
echo '<input type="hidden" id="D5" value="'.$D5.'">';
echo '<input type="hidden" id="D11" value="'.$D11.'">';
echo '<input type="hidden" id="D12" value="'.$D12.'">';
     
//ベースセッティング
$Ba01 =$_POST['Ba01'];
$Ba1 =$_POST['Ba1'];
$Ba02 =$_POST['Ba02'];
$Ba2 =$_POST['Ba2'];
echo '<input type="hidden" id="Ba01" value="'.$Ba01.'">';
echo '<input type="hidden" id="Ba1" value="'.$Ba1.'">';
echo '<input type="hidden" id="Ba02" value="'.$Ba02.'">';
echo '<input type="hidden" id="Ba2" value="'.$Ba2.'">';
      
//ギター１セッティング
$Gt00 =$_POST['Gt00'];
$Gt11 =$_POST['Gt11'];
$Gt01 =$_POST['Gt01'];
$Gt12 =$_POST['Gt12'];
echo '<input type="hidden" id="Gt00" value="'.$Gt00.'">';
echo '<input type="hidden" id="Gt11" value="'.$Gt11.'">';
echo '<input type="hidden" id="Gt01" value="'.$Gt01.'">';
echo '<input type="hidden" id="Gt12" value="'.$Gt12.'">';

//ギター２セッティング
$Gt02 =$_POST['Gt02'];
$Gt21 =$_POST['Gt21'];
$Gt03 =$_POST['Gt03'];
$Gt22 =$_POST['Gt22'];
echo '<input type="hidden" id="Gt02" value="'.$Gt02.'">';
echo '<input type="hidden" id="Gt21" value="'.$Gt21.'">';
echo '<input type="hidden" id="Gt03" value="'.$Gt03.'">';
echo '<input type="hidden" id="Gt22" value="'.$Gt22.'">';
?>