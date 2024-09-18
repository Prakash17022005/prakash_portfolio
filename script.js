document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

    toggle.addEventListener('click', () => {
        navMenu.classList.add('open');
        navMenu.classList.remove('closed');
        toggle.style.display = 'none';
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navMenu.classList.add('closed');
        toggle.style.display = 'block';
    });

    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    function linkAction() {
        navLinks.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        navMenu.classList.remove('open');
        navMenu.classList.add('closed');

        const width = window.innerWidth;
        if (width > 800) {
            toggle.style.display = 'none';
        } else {
            toggle.style.display = 'block';
        }
    }
});
