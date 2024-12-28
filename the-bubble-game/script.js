let timer=60   ;
let score=0;
let hitnum;
function upDateScore(){
               score+=10;
               document.querySelector("#score").textContent=score;

}
function NupDateScore(){
               score-=4;
               document.querySelector("#score").textContent=score;

}
function mkBbl(){
               let clutter="";
for(var i=0; i<275; i++){
              
               let num=Math.floor(Math.random()*10);
          clutter +=`<div class="bbl">${num}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function hitVal(){
               hitnum=Math.floor(Math.random()*10);
               document.querySelector("#hit").textContent=hitnum;

}
function runTimer(){
               let interval=setInterval(function(){
                              timer--;
                              document.querySelector("#time").textContent=timer;
                              if(timer<0){
                              clearInterval(interval);
                              document.querySelector("#time").textContent="Time's up!";
                              document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1>`;
                              document.querySelector("#hit").textContent="oh no!";

                              }
                              
               
               }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dtl){
               let trg=Number(dtl.target.textContent);
               if(trg==hitnum){
                              upDateScore();
                              hitVal();
                              mkBbl();
               }
               else if(trg!=hit){
                              NupDateScore();
                              hitVal();
                              mkBbl();
               }
               



               
})



runTimer();
mkBbl();
hitVal();

