const btresta = document.querySelector(".btn1");
const btreiniciar = document.querySelector(".btn2");
const btsuma = document.querySelector(".btn3");
let xxx = document.querySelector(".cnt");

let valor = 0

btresta.addEventListener("click", restar);
btreiniciar.addEventListener("click", reiniciar);
btsuma.addEventListener("click", sumar);

function restar(){
    valor--
    xxx.textContent = valor
}
function reiniciar(){
    valor = 0
    xxx.textContent = valor
}
function sumar(){
    valor++
    xxx.textContent = valor
}

