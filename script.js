const addBtn = document.querySelector(".addBtn");
const popup = document.querySelector("#popup");
const form = document.querySelector("#form");
const close = document.querySelector(".close")
addBtn.addEventListener('click', function () {
    if (popup.classList.contains("popup")) {
        popup.classList.remove("popup");
        popup.classList.add("popup-show");
        addBtn.classList.remove("addBtn");
        addBtn.classList.add("addBtn-hide");
    } 
});

close.addEventListener('click',function(){
   
        popup.classList.remove("popup-show");
        popup.classList.add("popup");
        addBtn.classList.remove("addBtn-hide");
        addBtn.classList.add("addBtn");
    
});