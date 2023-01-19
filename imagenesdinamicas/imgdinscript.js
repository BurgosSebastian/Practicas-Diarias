const img = document.querySelectorAll(".img0");



img.forEach(function (btn){
    btn.addEventListener("click",function(){
        img.forEach(function(rst){
            rst.classList = "img0"})
            btn.classList = "img1"
    })
});


