var timer = 15;
var score = 0;
var hitrn = 0;

function incscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    //hello
}

function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=168;i++){
   var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerVal = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerVal);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;
        }  
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",
function(dets){
 var clknum = Number(dets.target.textContent);
 if(clknum === hitrn){
    incscore();
    makeBubble();
    getNewHit();
 }
});

makeBubble();
runTimer();
getNewHit();