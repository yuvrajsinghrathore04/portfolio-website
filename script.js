// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Function for Hire Me button
function sayHello() {
  alert("Thanks for considering me! Let's build something amazing together. 📧 Reach out at your-email@example.com");
}

// Function for Message Me button
function contactMe() {
  window.location.href = "mailto:your-email@example.com?subject=Portfolio Inquiry&body=Hi Yuvraj, I'd like to connect!";
}

// Intersection Observer for fade-in animations (enhances scroll-based reveals)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});