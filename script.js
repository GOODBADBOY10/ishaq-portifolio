let hamburger = document.getElementById('hamburger');
let navbar = document.querySelector('.navbar')
hamburger.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
    if(hamburger.toggle){
        navbar.classList.toggle
    }

    }


const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});