const numeros = ["1z","2z0","3z3","4z4","5asd","6adsdasd","7asdasdas"];
const boton = document.querySelector(".btn");
const numpant = document.querySelector(".num");

boton.addEventListener("click",mostrar);

function show(i) {
    numpant.textContent = `${i}`
}

function mostrar(){ show(numeros[Math.floor(Math.random()*numeros.length)])
}
