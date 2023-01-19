const botones = document.querySelectorAll("[data-carousel-button]")

botones.forEach(button => {
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselButon === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        
        const activeSlides = slides.querySelector("[data-active]")
        console.log(slides)
    })
});

