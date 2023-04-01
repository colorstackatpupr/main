// JavaScript code to toggle the navigation bar on smaller screens
const toggleNav = document.querySelector('.toggle-nav');
const navLinks = document.querySelector('.top-nav ul');

toggleNav.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});