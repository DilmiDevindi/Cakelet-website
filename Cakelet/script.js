let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("Menu icon clicked");
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    console.log("Window scrolled");
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
