const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Subscribe form handling
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;

  if (firstName && email) {
    localStorage.setItem('subscriberName', firstName);
    localStorage.setItem('subscriberEmail', email);
    alert(`Thanks for subscribing, ${firstName}!`);
    this.reset();
  } else {
    alert("Please fill in both fields.");
  }
});

// Scroll to top button
const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
  toTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

toTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
