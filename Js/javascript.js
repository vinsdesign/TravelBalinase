// scrolling 
document.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    
    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});
// end scrolling