const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const boton = document.querySelector(".boton");

const texto = document.querySelector(".colortex");

boton.addEventListener("click",cambiarcolorhex)

function cambiarcolorhex (){
    let hexcolor = "#";
    for (let i = 0; i<6;i++){
        hexcolor += hex[Math.floor(Math.random()*hex.length)];
    }
    texto.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor
}





