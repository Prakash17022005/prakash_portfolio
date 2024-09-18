    
    const toggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

    toggle.addEventListener('click', () => {
        navMenu.classList.add('open');  // Add class to show menu
        navMenu.classList.remove('closed');  // Remove hidden state
        toggle.style.display = 'none';  // Hide toggle button
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('open');  // Hide the menu
        navMenu.classList.add('closed');   // Add hidden state
        toggle.style.display = 'block';  // Show toggle button again
    });
});

const navlink= document.querySelectorAll(".nav_link")

function linkAction(){

    navlink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    navMenu.classList.remove('open');  // Hide the menu
    navMenu.classList.add('closed');   // Add hidden state
    
    
    var width = window.innerWidth;
    if (width > 800){
        toggle.style.display = 'none';
    }
    else{
        toggle.style.display = 'block';
    }
}

navlink.forEach(n=> n.addEventListener('click',linkAction))