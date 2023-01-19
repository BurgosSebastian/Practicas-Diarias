const relhs = document.querySelector(".horas");
const relmin = document.querySelector(".minutos");
const relseg = document.querySelector(".segundo");
const ampm = document.querySelector(".cont-ampm");
let funcionando ;

function actualizarhora() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    if(horas>11){
        ampm.textContent = "PM"
        horas = horas-12
        relhs.textContent = `0${horas}:`
    } else{
        ampm.textContent = "AM"
        relhs.textContent = `${horas}:`
    }
    if(segundos<10){
        relseg.textContent = `0${segundos}`
    }else{
        relseg.textContent = `${segundos}`
    }
    relmin.textContent =`${minutos}:`
    console.log("hola")
}

funcionando = setInterval(actualizarhora,1000)




