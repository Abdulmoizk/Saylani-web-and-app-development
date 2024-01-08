// script.js

// Optional: Add interactive features using JavaScript

// Example: Expand and collapse sections on click
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});
