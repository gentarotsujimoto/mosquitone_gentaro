'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    canvas.width="600"
    canvas.height="600"    
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

//スネア
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
    if (D1 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";  
          ctx.arc(360, 80, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"; 
          ctx.strokeText("Sn", 360, 83);
    }else if (D1 == "持ち込み") {　
          ctx.beginPath();
          ctx.strokeStyle="red";  
          ctx.arc(360, 80, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center" 
          ctx.strokeText("Sn", 360, 83);
    }

//ハイタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
    if (D2 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(330, 115, 22, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.stroke(); 
          ctx.fill() ;
          ctx.textAlign = "center" 
          ctx.strokeText("H.T", 330, 118);
    }else if (D2 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(330, 115, 22, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("H.T", 330, 118);
　　}

//ロウタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (D3 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(285, 115, 22, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center" 
          ctx.strokeText("L.T", 285, 118);
        }else if (D3 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(285, 115, 22, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("L.T", 285, 118);
        }

//フロアタム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (D4 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(250, 80, 28, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("F.T", 250, 83,);
        }else if (D4 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(250, 80, 28, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("F.T", 250, 83,);
        }

//ハイハット 
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K1 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(397, 80, 23, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("hh", 397, 83,);
        }else if (K1 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(397, 80, 23, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("hh", 397, 83,);
        }

//クラッシュシンバル1
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K2 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(370, 120, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("cs1", 370, 123,);
        }else if (K2 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(370, 120, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
          ctx.strokeText("cs1", 370, 123,);
        }

//クラッシュシンバル2 
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K3 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(245, 120, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("cs2", 245, 123,);
        }else if (K3 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(245, 120, 24, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("cs2", 245, 123,);
        }

//ライドシンバル
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (K4 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.arc(210, 79, 28, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
          ctx.strokeText("rs", 210, 82,);
        }else if (K4 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(210, 79, 28, 0, Math.PI*2, false);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
          ctx.strokeText("rs", 210, 82,);
        }

//キック
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (B1 == "持ち込みなし") {　
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(300, 65, 15, 30);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
          ctx.strokeText("k1", 308 , 85);
        }else if (B1 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(300, 65, 15, 30);;
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke(); 
          ctx. textAlign = "center"
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
//バスドラム
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合表示なし
        if (D5 == "持ち込みなし") {
          ctx.save();
          ctx.scale(2, 1); // 横２倍
          ctx.beginPath();
          ctx.arc(155, 155, 20, Math.PI * 2, false);
          ctx.fillStyle = "white" ;
          ctx.strokeText("BD",155,160 );
          ctx.restore();
          ctx.stroke();
　　　　　}else if (D5 == "持ち込み") {
          ctx.scale(2, 1); // 横２倍
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.arc(155, 155, 20, Math.PI * 2, false);
          ctx.fillStyle = "white" ;
          ctx.strokeText("BD",155,160 );
          ctx.restore();
          ctx.stroke();
　　　　　}

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

//ヘッド　持ち込みなし・持ち込み・不要
        if (Ba01 == "持ち込みなし") {
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(70,160,60,20);
          ctx.fillStyle = "white" ;
          ctx.fill();
          ctx.stroke();
          ctx. textAlign = "center"
        }else if(Ba01 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(70,160,60,20);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
        }
//ヘッド　名前入力、空欄の場合はHead
        if (Ba1 == null) {
          ctx.strokeText("Head",70,160 );
        }else{
          ctx.strokeText(Ba1,95,170);
        }

//キャビネット　持ち込みなし・持ち込み・不要
         if (Ba02 == "持ち込みなし") {
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(70,180,60,40);
          ctx.fillStyle = "white" ;
          ctx.fill();
          ctx.stroke();
        }else if(Ba02 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(70,180,60,40);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
        }
//キャビネット　名前入力、空欄の場合はHead
        if (Ba2 == null) {
          ctx.strokeText("Head",95,200);
        }else{
          ctx.strokeText(Ba2,95,200);
        }

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

//ヘッド　持ち込みなし・持ち込み・不要
        if( Gt01 == "持ち込みなし(Combo)" || Gt01 == "持ち込み(Combo)") {
	        console.log("Guitar1 Head:"+"なし");
          console.log("Guitar1 Head Name:"+ "なし");
        }else if (Gt00 == "持ち込みなし") {
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(460,160,60,20);
          ctx.fillStyle = "white" ;
          ctx.fill();
          ctx.stroke();
          console.log("Guitar1 Head:"+Gt00);
        }else if(Gt00 == "持ち込み") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(460,160,60,20);
          ctx.fillStyle = "white" ;
          ctx.fill() ; 
          ctx.stroke();
          ctx. textAlign = "center"
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
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(460,180,60,40);         
	        ctx.fill();
          ctx.stroke();
        }else if(Gt01 == "持ち込み(Cabi)") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(460,180,60,40);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
        }else if (Gt01 == "持ち込みなし(Combo)") {
          ctx.beginPath();
          ctx.strokeStyle="black";
          ctx.strokeRect(460,180,60,40);         
	        ctx.fill();
          ctx.stroke();
        }else if(Gt01 == "持ち込み(Combo)") {
          ctx.beginPath();
          ctx.strokeStyle="red";
          ctx.strokeRect(460,180,60,40);
          ctx.fillStyle = "white" ;
          ctx.fill() ;
          ctx.stroke();
          ctx. textAlign = "center"
        }
//キャビネット　名前入力、空欄の場合はHead
        if (Gt12 == null) {
          ctx.strokeText("Cabi",483,200);
        }else{
          ctx.strokeText(Gt12,483,200);
        }
	
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

//ヘッド　持ち込みなし・持ち込み・不要
          if(Gt03 == "持ち込みなし(Combo)" || Gt03 == "持ち込み(Combo)") {
            console.log("Guitar1 Head:"+"なし");
            console.log("Guitar1 Head Name:"+ "なし");
          }else if (Gt02 == "持ち込みなし") {
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.strokeRect(200,160,60,20);
            ctx.fillStyle = "white" ;
            ctx.fill();
            ctx.stroke();
            console.log("Guitar1 Head:"+Gt02);
          }else if(Gt02 == "持ち込み") {
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.strokeRect(200,160,60,20);
            ctx.fillStyle = "white" ;
            ctx.fill() ; 
            ctx.stroke();
            ctx. textAlign = "center"
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
          }else {
            ctx.strokeText(Gt21,223,170);
            console.log("Guitar1 Head Name:"+Gt21);
          }

          //キャビネット　持ち込みなし・持ち込み・不要
          if (Gt03 == "持ち込みなし(Cabi)") {
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.strokeRect(200,180,60,40);         
            ctx.fill();
            ctx.stroke();
          }else if(Gt03 == "持ち込み(Cabi)") {
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.strokeRect(200,180,60,40);
            ctx.fillStyle = "white" ;
            ctx.fill() ;
            ctx.stroke();
            ctx. textAlign = "center"
          }else if (Gt03 == "持ち込みなし(Combo)") {
            ctx.beginPath();
            ctx.strokeStyle="black";
            ctx.strokeRect(200,180,60,40);         
            ctx.fill();
            ctx.stroke();
          }else if(Gt03 == "持ち込み(Combo)") {
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.strokeRect(200,180,60,40);
            ctx.fillStyle = "white" ;
            ctx.fill() ;
            ctx.stroke();
            ctx. textAlign = "center"
          }
          //キャビネット　名前入力、空欄の場合はHead
          if (Gt22 == null) {
            ctx.strokeText("Cabi",223,200);
          }else{
            ctx.strokeText(Gt22,223,200);
          }

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

//ギター２かつボーカルの場合
if(P1="Vo/G2") {
            //矢印軸          
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(230,250);
            // 線を引く
            ctx.lineTo(230,300);
            ctx.stroke();

            //左側
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(230,250);
            // 線を引く
            ctx.lineTo(220,265);
            ctx.stroke();

            //右側
            /* 線を引く */
            // 開始位置に移動する
            ctx.moveTo(230,250);
            // 線を引く
            ctx.lineTo(240,265);
            ctx.stroke();

            //真ん中の丸
            ctx.beginPath();
            ctx.strokeStyle="black";  
            ctx.arc(230, 275, 10, 0, Math.PI*2, false);
            ctx.stroke();
          
            //表示(Vo/Gt2)
            ctx.strokeText("Vo",230,310 );
            ctx.stroke();
          }
//注意書き
ctx.fillStyle="red";
ctx.fillText("*赤は持ち込み機材",50,390);

}
  draw();
}
