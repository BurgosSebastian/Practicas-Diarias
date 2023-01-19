const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const offset = boton.dataset.boton === "next" ? 1 : -1;
        const slides = document.querySelector(".slider-padre");
        const slideactivo = document.querySelector("[data-active]")

        let nuevoIndice = [...slides.children].indexOf(slideactivo) + offset;
        if (nuevoIndice < 2) nuevoIndice = slides.children.length - 1
        if (nuevoIndice >= slides.children.length) nuevoIndice = 2 
        
        slides.children[nuevoIndice].dataset.active = true
        delete slideactivo.dataset.active
        
    })
});