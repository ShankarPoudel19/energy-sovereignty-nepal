const header = document.querySelector("[data-elevate]");

function updateHeader() {
  header.classList.toggle("is-elevated", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
