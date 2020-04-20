'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    canvas.width="589"
    canvas.height="404"    
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

//ctx.fillRect(x, y, width, height);
//DBGGO.phpのPOST処理はここから
//////////////////////////////////////////////////////
//              ドラムセッティング                   //
//////////////////////////////////////////////////////
let D1 = document.getElementById('D1').value;
let D2 = document.getElementById('D2').value;
let D3 = document.getElementById('D3').value;
let D4 = document.getElementById('D4').value;
let K1 = document.getElementById('K1').value;
let K2 = document.getElementById('K2').value;
let K3 = document.getElementById('K3').value;
let K4 = document.getElementById('K4').value;
let B1 = document.getElementById('B1').value;
let D5 = document.getElementById('D5').value;
let D11 = document.getElementById('D11').value;
let D12 = document.getElementById('D12').value;
console.log("Snare:"+D1);
console.log("High Tom:"+D2);
console.log("Low Tom:"+D3);
console.log("Floor Tom:"+D4);
console.log("High Hut:"+K1);
console.log("Clash1:"+K2);
console.log("Clash2:"+K3);
console.log("Ride:"+K4);
console.log("Kick:"+B1);
console.log("Bass Drum:"+D5);
console.log("China:"+D11);
console.log("Splash:"+D12);
function Drum_Top(){
//バスドラム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
if (D5 == "持ち込みなし") {
  BassDrum("black");
}else if (D5 == "持ち込み") {
  BassDrum("red");
}
//スネア
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
    if (D1 == "持ち込みなし") {　
      Drum(360,80,24,"Sn",360,83,"black");
    }else if (D1 == "持ち込み") {　
      Drum(360,80,24,"Sn",360,83,"red");
    }

//ハイタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
    if (D2 == "持ち込みなし") {　
      Drum(330,115,22,"H.T",330,118,"black");
    }else if (D2 == "持ち込み") {
      Drum(330,115,22,"H.T",330,118,"red");
　　}

//ロウタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (D3 == "持ち込みなし") {　
          Drum(285,115,22,"L.T",285,118,"black");
        }else if (D3 == "持ち込み") {
          Drum(285,115,22,"L.T",285,118,"red");
        }

//フロアタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (D4 == "持ち込みなし") {　
          Drum(250,80,28,"F.T",250, 83,"black");
                }else if (D4 == "持ち込み") {
          Drum(250,80,28,"F.T",250, 83,"red");
        }

//ハイハット 
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K1 == "持ち込みなし") {　
          Drum(397,80,23,"hh",397,83,"black");
        }else if (K1 == "持ち込み") {
          Drum(397,80,23,"hh",397,83,"red");
        }

//クラッシュシンバル1
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K2 == "持ち込みなし") {　
          Drum(370,120,24,"cs1",370,123,"black");
        }else if (K2 == "持ち込み") {
          Drum(370,120,24,"cs1",370,123,"red");
        }

//クラッシュシンバル2 
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K3 == "持ち込みなし") {　
          Drum(245,120,24,"cs2",245,123,"black");
        }else if (K3 == "持ち込み") {
          Drum(245,120,24,"cs2",245,123,"red");
        }

//ライドシンバル
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K4 == "持ち込みなし") {　
          Drum(210,79,28,"rs",210,82,"black");
        }else if (K4 == "持ち込み") {
          Drum(210,79,28,"rs",210,82,"red");
        }
//キック
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (B1 == "持ち込みなし") {　
          Kick(300, 65, 15, 30,"k1",308 ,85,"black");
        }else if (B1 == "持ち込み") {
          Kick(300, 65, 15, 30,"k1",308 ,85,"red");
          ctx.strokeText("k1",308 , 85);
        }else if (B1 == "持ち込み(ツイン)") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(300, 65, 15, 30);
          ctx.fillStyle = "white" ;
          ctx.strokeText("k1",308 , 85);
          ctx.strokeText("k1",500,250);
          //ctx.rotate( 135* Math.PI / 180 ) //検討する2019/11/26
          ctx.strokeRect(0,0, 30, 15);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
        }
        return
      }
 Drum_Top();
//////////////////////////////////////////////////////
//              ベースセッティング                   //
//////////////////////////////////////////////////////
let Ba01 = document.getElementById('Ba01').value;
let Ba1 = document.getElementById('Ba1').value;
let Ba02 = document.getElementById('Ba02').value;
let Ba2 = document.getElementById('Ba2').value;
console.log("Bass Head:"+Ba01);
console.log("Base Head Name:"+Ba1);
console.log("Base Cabi,Combo:"+Ba02);
console.log("Base Cabi,Combo Name:"+Ba2);

//ベース（処理開始）
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合処理なし          
function Bass_Top(){
//ヘッド　持ち込みなし・持ち込み・不要
        if (Ba01 == "持ち込みなし") {
          BassHead("black",70,160,60,20);
        }else if(Ba01 == "持ち込み") {
          BassHead("red",70,160,60,20);
        }
//ヘッド　名前入力、空欄の場合はHead
        if (Ba1 == null) {
          ctx.strokeText("Head",70,160 );
        }else{
          ctx.strokeText(Ba1,95,170);
        }

//キャビネット　持ち込みなし・持ち込み・不要
         if (Ba02 == "持ち込みなし") {
          Bass_Cabi("black",70,180,60,40);
        }else if(Ba02 == "持ち込み") {
          Bass_Cabi("red",70,180,60,40);
        }
//キャビネット　名前入力、空欄の場合はHead
        if (Ba2 == null) {
          ctx.strokeText("Head",95,200);
        }else{
          ctx.strokeText(Ba2,95,200);
        }
      }
Bass_Top();
//////////////////////////////////////////////////////
//              ギター１セッティング                 //
//////////////////////////////////////////////////////
let Gt00 = document.getElementById('Gt00').value;
let Gt11 = document.getElementById('Gt11').value;
let Gt01 = document.getElementById('Gt01').value;
let Gt12 = document.getElementById('Gt12').value;
console.log("Guitar1 Cabi,Combo:"+Gt01);
console.log("Guitar1 Cabi,Combo Name:"+Gt12);
//ギター１（処理開始）
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合処理なし
function Guitar1_Top(){
//ヘッド　持ち込みなし・持ち込み・不要
        if( Gt01 == "持ち込みなし(Combo)" || Gt01 == "持ち込み(Combo)") {
	        console.log("Guitar1 Head:"+"なし");
          console.log("Guitar1 Head Name:"+ "なし");
        }else if (Gt00 == "持ち込みなし") {
          Guitar_Head("black",460,160,60,20);　　
          console.log("Guitar1 Head:"+Gt00);
        }else if(Gt00 == "持ち込み") {
          Guitar_Head("red",460,160,60,20);　　
          console.log("Guitar1 Head:"+Gt00);
        }
//ヘッド　名前入力、空欄の場合はHead
        if(Gt01 == "持ち込みなし(Combo)") {
          console.log("Guitar1 Head Name:"+"なし");
        }else if(Gt01 == "持ち込み(Combo)") {
          console.log("Guitar1 Head Name:"+"なし");
	      }else if (Gt11 == "") {
          ctx.strokeText("Head",483,170);
          console.log("Guitar1 Head Name:"+"Head");
        }else {
          ctx.strokeText(Gt11,483,170);
          console.log("Guitar1 Head Name:"+Gt11);
        }

//キャビネット　持ち込みなし・持ち込み・不要
         if (Gt01 == "持ち込みなし(Cabi)") {
          Guitar_Cabi("black",460,180,60,40);
        }else if(Gt01 == "持ち込み(Cabi)") {
          Guitar_Cabi("red",460,180,60,40);
          ctx. textAlign = "center"
        }else if (Gt01 == "持ち込みなし(Combo)") {
          Guitar_Cabi("black",460,180,60,40);
        }else if(Gt01 == "持ち込み(Combo)") {
          Guitar_Cabi("red",460,180,60,40);
        }
//キャビネット　名前入力、空欄の場合はCabi
        if (Gt12 == null) {
          ctx.strokeText("Cabi",483,200);
        }else{
          ctx.strokeText(Gt12,483,200);
        }
      }
Guitar1_Top();	
//////////////////////////////////////////////////////
//              ギター２セッティング                 //
//////////////////////////////////////////////////////
//ギター２だけログが出ない
let Gt02 = document.getElementById('Gt02').value;
let Gt21 = document.getElementById('Gt21').value;
let Gt03 = document.getElementById('Gt03').value;
let Gt22 = document.getElementById('Gt22').value;
console.log("Guitar2 Head:"+Gt02);
console.log("Guitar2 Head Name:"+Gt21);
console.log("Guitar2 Cabi,Combo:"+Gt03);
console.log("Guitar2 Cabi,Combo Name:"+Gt22);
//ギター２（処理開始）
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合処理なし
function Guitar2_Top(){
//ヘッド　持ち込みなし・持ち込み・不要
          if(Gt03 == "持ち込みなし(Combo)" || Gt03 == "持ち込み(Combo)") {
            console.log("Guitar1 Head:"+"なし");
            console.log("Guitar1 Head Name:"+ "なし");
          }else if (Gt02 == "持ち込みなし") {
            Guitar_Head("black",200,160,60,20);
            console.log("Guitar1 Head:"+Gt02);
          }else if(Gt02 == "持ち込み") {
            Guitar_Head("red",200,160,60,20);
            console.log("Guitar1 Head:"+Gt02);
          }
          //ヘッド　名前入力、空欄の場合はHead
          if(Gt03 == "持ち込みなし(Combo)") {
            console.log("Guitar1 Head Name:"+"なし");
          }else if(Gt03 == "持ち込み(Combo)") {
            console.log("Guitar1 Head Name:"+"なし");
          }else if (Gt21 == "") {
            ctx.strokeText("Head",223,170);
            console.log("Guitar1 Head Name:"+"Head");
          }else if (Gt21 == "" || Gt03 == "持ち込みなし(Combo)" && Gt21 == "" || Gt03 == "持ち込み(Combo)") {
            console.log("Guitar1 Head Name:"+"なし");
          }else {
            ctx.strokeText(Gt21,223,170);
            console.log("Guitar1 Head Name:"+Gt21);
          }

          //キャビネット　持ち込みなし・持ち込み・不要
          if (Gt03 == "持ち込みなし(Cabi)") {
            Guitar_Cabi("black",200,180,60,40);
          }else if(Gt03 == "持ち込み(Cabi)") {
            Guitar_Cabi("red",200,180,60,40);
          }else if (Gt03 == "持ち込みなし(Combo)") {
            Guitar_Cabi("black",200,180,60,40);
          }else if(Gt03 == "持ち込み(Combo)") {
            Guitar_Cabi("black",200,180,60,40);
          }
          //キャビネット　名前入力、空欄の場合はCabi
          if (Gt22 == null) {
            ctx.strokeText("Cabi",223,200);
          }else{
            ctx.strokeText(Gt22,223,200);
          }
        }
Guitar2_Top();
///////////////////////////////////////////////////
//          マイク設定(mypage.htmlより)　　　　   //
//////////////////////////////////////////////////           
let P1 = document.getElementsByName('P1');
let P2 = document.getElementsByName('P2');
let P3 = document.getElementsByName('P3');
let P4 = document.getElementsByName('P4');
let P5 = document.getElementsByName('P5');
let P6 = document.getElementsByName('P6');
let P7 = document.getElementsByName('P7');
let P8 = document.getElementsByName('P8');
let P9 = document.getElementsByName('P9');
let P10 = document.getElementsByName('P10');
console.log("Member1:"+P1[0].value);
console.log("Member2:"+P2[0].value);
console.log("Member3:"+P3[0].value);
console.log("Member4:"+P4[0].value);
console.log("Member5:"+P5[0].value);
console.log("Member6:"+P6[0].value);
console.log("Member7:"+P7[0].value);
console.log("Member8:"+P8[0].value);
console.log("Member9:"+P9[0].value);
console.log("Member10:"+P10[0].value);

//それぞれの値を配列に格納し、Pとする。
var P = [P1[0].value,P2[0].value,P3[0].value,P4[0].value,P5[0].value,P6[0].value,P7[0].value,P8[0].value,P9[0].value,P10[0].value];
function Vocal_Top(){
//ギター２かつボーカルの場合
if(P.includes("Vo/Gt2") == true) {
  microphone(230,250,230,300,230,250,220,265,230,250,240,265,230,275,230,310,null,null);
}
//ギター２かつコーラスの場合
if(P.includes("Cho/Gt2") == true){
  microphone(230,250,230,300,230,250,220,265,230,250,240,265,230,275,null,null,230,310);
}
//ギター１かつボーカルの場合
if(P.includes("Vo/Gt1") == true){
  microphone(490,250,490,300,490,250,480,265,490,250,500,265,490,275,490,310,null,null);
}
//ギター１かつコーラスの場合
if(P.includes("Cho/Gt1") == true){
  microphone(490,250,490,300,490,250,480,265,490,250,500,265,490,275,null,null,490,310);
}
//ベースかつボーカルの場合
if(P.includes("Vo/Ba") == true){
  microphone(100,250,100,300,100,250,90,265,100,250,110,265,100,275,100,310,null,null); 
}
//ベースかつコーラスの場合
if(P.includes("Cho/Ba") == true){
  microphone(100,250,100,300,100,250,90,265,100,250,110,265,100,275,null,null,100,310);
}
//ボーカルの場合
if(P.includes("Vo") == true){
  microphone(300,250,300,300,300,250,290,265,300,250,310,265,300,275,300,310,null,null);
} 
}
Vocal_Top();

//ドラム表示処理（丸）
function Drum(O1,O2,O3,O4,O5,O6,Col){
  ctx.beginPath();
  ctx.strokeStyle=Col;  
  ctx.arc(O1, O2, O3, 0, Math.PI*2, false);
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke();
  ctx. textAlign = "center"; 
  ctx.strokeText(O4, O5, O6);
}
//ドラム表示処理（キック四角）
function Kick(O1,O2,O3,O4,O5,O6,O7,Col){
  ctx.beginPath();
  ctx.strokeStyle=Col;
  ctx.strokeRect(O1,O2,O3,O4);
  ctx.fillStyle = "white" ;
  ctx.fill() ;
  ctx.stroke();
  ctx. textAlign = "center"
  ctx.strokeText(O5,O6,O7);
}
//ドラム表示処理（バスドラム　楕円）
function BassDrum(col){
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle=col;
  ctx.scale(2, 1);
  ctx.arc(155, 155, 20, Math.PI * 2, false);
  ctx.fillStyle = "white" ; 
  ctx.restore();
  ctx.strokeText("BD",302,160 );
  ctx.stroke();
}
//ベースヘッド
function BassHead(col,b1,b2,b3,b4,){
  ctx.beginPath();
  ctx.strokeStyle=col;
  ctx.strokeRect(b1,b2,b3,b4);
  ctx.fillStyle = "white" ;
  ctx.fill();
  ctx.stroke();
  ctx. textAlign = "center"
}
//ベースキャビ
function Bass_Cabi(col,b1,b2,b3,b4){
  ctx.beginPath();
  ctx.strokeStyle=col;
  ctx.strokeRect(b1,b2,b3,b4);
  ctx.fillStyle = "white" ;
  ctx.fill();
  ctx.stroke();
}
//ギターヘッド
function Guitar_Head(col,g1,g2,g3,g4){
  ctx.beginPath();
  ctx.strokeStyle=col;
  ctx.strokeRect(g1,g2,g3,g4);
  ctx.fillStyle = "white" ;
  ctx.fill();
  ctx.stroke();
}
//ギターキャビ
function Guitar_Cabi(col,g1,g2,g3,g4){
  ctx.beginPath();
  ctx.strokeStyle=col;
  ctx.strokeRect(g1,g2,g3,g4);         
  ctx.fill();
  ctx.stroke();
}
//マイク表示処理
function microphone(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18){
            //矢印軸          
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(m1,m2);
            // 線を引く
            ctx.lineTo(m3,m4);
            ctx.stroke();

            //左側
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(m5,m6);
            // 線を引く
            ctx.lineTo(m7,m8);
            ctx.stroke();

            //右側
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(m9,m10);
            // 線を引く
            ctx.lineTo(m11,m12);
            ctx.stroke();

            //真ん中の丸
            ctx.beginPath();
            ctx.strokeStyle="black";  
            ctx.arc(m13, m14, 10, 0, Math.PI*2, false);
            ctx.stroke();
          
            //表示(Vo/Gt2)
            ctx.strokeText("Vo",m15,m16 );
            ctx.stroke();
          
            //表示(Cho/Gt2)
            ctx.strokeText("Cho",m17,m18 );
            ctx.stroke();
}
/*canvasデータを画像に変換にする関数
function chgImg()
{
  var png = ctx.toDataURL();
  document.getElementById("newImg").src = png;
}*/
//注意書き
ctx.fillStyle="red";
ctx.fillText("*赤は持ち込み機材",50,390);

}
  draw();
}
