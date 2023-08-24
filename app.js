const panel=document.querySelectorAll(".panel");
panel.forEach(function (panel) {
    panel.addEventListener("click",()=>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});
function removeActiveClasses() {
    panel.forEach(function(panel) {
        panel.classList.remove("active");
    });
}