const btst = document.querySelector(".btnstart");
const btsp = document.querySelector(".btnstop");
const btre = document.querySelector(".btnreset");
let muestra = document.querySelector(".tiempo");
let intervalo ;
let decimas = 00;
let segundos = 00;



btst.addEventListener("click",arranca)

btsp.addEventListener("click",parar)

btre.addEventListener("click",resetear)


function arranca(){intervalo = setInterval(()=>{
    decimas++;
    if(decimas>9){
        segundos++;
        decimas = 0;
        }
    muestra.textContent=`${segundos}:${decimas}`},100
    )}

function parar(){
    clearInterval(intervalo);
}

function resetear(){
    decimas = 0;
    segundos = 0;
    muestra.textContent = `${segundos}:${decimas}`
}



