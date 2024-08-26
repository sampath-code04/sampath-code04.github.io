// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.ctf-dropdown');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-btn');
    const content = dropdown.querySelector('.dropdown-content');

    button.addEventListener('click', () => {
      content.classList.toggle('show');
    });
  });
});
