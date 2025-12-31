document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // stop actual submission

  // Show the message
  formResponse.textContent = 'Thank you! Your message has been sent.';

  // Clear the message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    formResponse.textContent = '';
  }, 3000);

  // Reset the form
  contactForm.reset();
});
