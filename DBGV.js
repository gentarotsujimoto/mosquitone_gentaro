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

//ドラムのセッティング
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
//スネア持ち込みなし
    if (D1 == "Not bring in") {　
          ctx.fillRect(50, 50, 50, 50);
          ctx.strokeStyle='black';
          ctx.strokeRect(150, 150, 150, 150);
    }else if (D1 == "Bring in") {　
      ctx.strokeStyle='black';
      ctx.strokeRect(150, 150, 150, 150);
    }

        
  }

  draw();
}