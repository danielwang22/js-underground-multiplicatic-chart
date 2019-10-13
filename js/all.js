//DOM元素
var tableview = document.querySelector("#container");

//空變數
var str = "";
var tables = [];

//將99乘法表加到陣列裡
for(let i=2;i<10;i++){
  let index = i - 2;
  let table = [];
  table.push(`${i}`);
  for(let j=1;j<10;j++){
    //先將單一欄99乘法表push到table陣列裡
    str = i + " x " + j + " = " + i*j ;
    table.push(str);
  }
  //把所有99乘法表加到tables陣列
  tables[index] = table;
}



for(let k = 0;k<tables.length;k++){
  //先印出白色卡片
  tableview.innerHTML += 
    `<div class="box table grid-xl-2 grid-lg-3 grid-md-3 grid-sm-6 d-flex flex-row justify-content-center align-items-center mb1 postion-relative">
  <div class="d-flex flex-column left${k}"></div>
  <div class="d-flex flex-column pl1 pt1 right${k}"></div>
  </div>`;
    
  //讀取每一張卡片左右欄的DOM元素
  let left = document.querySelector(`.left${k}`);
  let right = document.querySelector(`.right${k}`);
  //按照位置印出來
  for(let m = 0;m<tables[k].length;m++){
    //開頭數字
    if(m<1){
      left.innerHTML += `<div class="font-size-lg text-center text-primary text-shadow" style="line-height:1.14;">${tables[k][m]}</div>`
    }
    //左欄1~3
    else if(m>0 && m<4){
      left.innerHTML += `<div class="font-size-sm text-primary">${tables[k][m]}</div>`
    }
    //右欄4~9
    else{
      right.innerHTML += `<div class="font-size-sm text-primary grid">${tables[k][m]}</div>`
    }
  }
}