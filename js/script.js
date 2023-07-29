// Toggle Nav Links - Hide And Show
let buttons = [document.querySelector('.toggle-menue'), document.querySelector('.close-menue')],
    navLinks = document.querySelector('header nav');

buttons.forEach(icon => {
    icon.addEventListener('click', function () {
        navLinks.classList.toggle('hide-md');
    })
});

// Add Box Shadow To header When Scroll
let header = document.querySelector('header');

checkScrollY();
window.onscroll = () => {
    checkScrollY();
};

function checkScrollY() {
    document.documentElement.scrollTop >= 53 ? header.classList.add('scroll') : header.classList.remove('scroll');
};