const barrita = document.querySelector(".cont-nav")
const estilos = getComputedStyle(barrita);

let ancho = parseInt(estilos.width)
let otrodato = barrita.style.display


function barranav(){
    let ancho = parseInt(estilos.width)
    if( ancho < 1200 ){
        barrita.style.opacity = 0
    } else barrita.style.opacity = 1
            console.log(ancho)
}

setInterval(barranav, 100);


