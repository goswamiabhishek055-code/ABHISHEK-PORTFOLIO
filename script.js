/* Typing Effect */
const text = ["Web Developer 💻", "Building Projects 🚀", "Future Engineer 🎯"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = text[i];
  j = deleting ? j - 1 : j + 1;

  document.getElementById("typing").innerHTML = current.substring(0, j);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

/* Dark Mode */
function toggleMode() {
  document.body.classList.toggle("light");
}

/* Scroll Animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
