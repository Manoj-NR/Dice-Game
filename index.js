var n = Math.random();
var m = Math.floor(n*6)+1;


var randImg = "images/dice"+m+".png";
document.querySelector(".img1").setAttribute("src", randImg);

var t = Math.random();
var u = Math.floor(t*6)+1;


var randImg2 = "images/dice"+u+".png";
document.querySelector(".img2").setAttribute("src", randImg2);

if(m>u)
document.querySelector("h1").textContent = "Player1 wins";
else if(m<u)
document.querySelector("h1").textContent = "Player2 wins";
else
document.querySelector("h1").textContent = "Draw";
