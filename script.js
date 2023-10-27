


function checkScreenSize(){
    
    let projbox = document.querySelector(".project");
    if(window.innerWidth<520){
        projbox.style.marginTop = "50rem";
    }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
