(function(){
    const listElements = document.querySelectorAll(".menu__item--show");
    const list = document.querySelector(".menu__links");
    const menu = document.querySelector(".menu__hamburguer");

    const addClick = ()=>{
        listElements.forEach( Element =>{
            Element.addEventListener("click", ()=>{

                let subMenu = Element.children[1];
                let height = 0;
                Element.classList.toggle("menu__item--active");

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            })
        })
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute("style")){
                element.children[1].removeAttribute("style");
                element.classList.remove("menu__item--active");
            }
        })
    }

    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
        }else{
            addClick()
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener("click",()=>list.classList.toggle("menu__links--show"))

    console.log(listElements)
    console.log(list)

})();

