// change navbar styles on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >0)
})


// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
 

menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";}
)


//close nav menu
const closeNav = () => {
    menu.classList.remove('open'); 
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click',closeNav);

