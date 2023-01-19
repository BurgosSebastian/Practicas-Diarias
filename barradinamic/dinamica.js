const btn = document.querySelector(".btn-display");
const estilo = document.querySelector(".ulul")

function cambiarcolor(){
    let newestilo = estilo.id
    if (newestilo.includes("chau")){
       estilo.id = "hola"
    } else {
        estilo.id = "chau"
    }
}
   
btn.addEventListener("click",cambiarcolor);

