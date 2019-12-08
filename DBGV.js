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
//DBGGO.phpのGET処理はここから

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
        if (Ba01 == null) {
          ctx.strokeText("Head",70,160 );
        }else{
          ctx.strokeText(Ba1,95,170);
        }

//ヘッド　持ち込みなし・持ち込み・不要


//////////////////////////////////////////////////////
//              ギター１セッティング                 //
//////////////////////////////////////////////////////
let Gt00 = document.getElementById('Gt00').value;
let Gt11 = document.getElementById('Gt11').value;
let Gt01 = document.getElementById('Gt01').value;
let Gt12 = document.getElementById('Gt12').value;
console.log("Guitar1 Head:"+Gt00);
console.log("Guitar1 Head Name:"+Gt11);
console.log("Guitar1 Cabi,Combo:"+Gt01);
console.log("Guitar1 Cabi,Combo Name:"+Gt12);
//ギター１（処理開始）
//持ち込みなし(if)
//持ち込み(else if)
//不要の場合処理なし

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

  }
  draw();
}