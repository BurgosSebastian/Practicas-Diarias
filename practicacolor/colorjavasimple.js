const colores = ["red","blue","green","black","white"];

const boton = document.querySelector(".boton")

const texto = document.querySelector(".colortex");

boton.addEventListener("click",cambiarcolor)

function cambiarcolor() {
    let color = colores[Math.floor(Math.random()*colores.length)];
    document.body.style.backgroundColor = `${color}`
    texto.textContent = `${color}`
}