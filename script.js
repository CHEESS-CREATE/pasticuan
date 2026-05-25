<!-- ========================================= -->
<!-- FILE: script.js -->
<!-- ========================================= -->

/* LOADING */

window.onload = function(){

setTimeout(()=>{

const loading = document.getElementById("loading");

if(loading){

loading.style.display="none";

}

},2000);

};

/* MEMBER POPUP */

const names = [
"Rizky",
"Andi",
"Kevin",
"Budi",
"Fajar",
"Agus",
"Dimas",
"Rama"
];

function showPopup(){

const popup = document.getElementById("popupMember");

if(!popup) return;

const randomName =
names[Math.floor(Math.random()*names.length)];

popup.innerHTML = `
🔥 ${randomName} baru join VIP SULTAN
`;

popup.style.display="block";

setTimeout(()=>{

popup.style.display="none";

},3000);

}

setInterval(showPopup,7000);

/* PROFIT ANIMATION */

function animateValue(id,start,end,duration){

let range = end - start;

let current = start;

let increment = end > start ? 1 : -1;

let stepTime = Math.abs(Math.floor(duration / range));

let obj = document.getElementById(id);

if(!obj) return;

let timer = setInterval(function(){

current += increment;

obj.innerHTML = current + "%";

if(current == end){

clearInterval(timer);

}

}, stepTime);

}

animateValue("profitCounter",0,31,2000);

/* DISABLE RIGHT CLICK */

document.addEventListener("contextmenu",e=>e.preventDefault());

/* DISABLE F12 */

document.onkeydown = function(e){

if(e.keyCode == 123){

return false;

}

if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){

return false;

}

}
