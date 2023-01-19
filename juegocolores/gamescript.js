const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const cuadros = document.querySelectorAll(".cntcolor");
const textcolor = document.querySelector(".gamecolor");

const colores = []

function colrandom(){ 
    let colorhex = "#"
    for (i=0;i<6;i++) {
        colorhex += hex[Math.floor(Math.random()*hex.length)]
        } return colorhex;
    }

function gentres(){
    for(x=0;x<3;x++){
        colores[x]=colrandom();
        cuadros[x].style.setProperty("background-color",`${colores[x]}`)
        cuadros[x].style.setProperty("color",`${colores[x]}`)
        cuadros[x].textContent = `${colores[x]}`
    }
    textcolor.textContent = colores[Math.floor(Math.random()*colores.length)]
}

cuadros.forEach(function juego(e){
    e.addEventListener("click", function prueba(){if(e.textContent == textcolor.textContent){
                                                        alert("correcto")} else{ alert("incorrecto")}})
})

gentres();
console.log(colores)










