/* PAUSE — website interactions
   Kontak sosial belum diaktifkan karena akun resmi belum diberikan.
*/
const PAUSE_CONFIG = {
  whatsappNumber: "", // Isi dengan kode negara + nomor, tanpa + atau spasi. Contoh format: 6281234567890
  instagramUrl: "",   // Isi URL Instagram resmi PAUSE
  facebookUrl: ""     // Isi URL Facebook resmi PAUSE
};

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.focus();
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
/* PAUSE TESTIMONIAL SLIDER */

(() => {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".testimonial-dot");
  const prev = document.querySelector(".testimonial-arrow.prev");
  const next = document.querySelector(".testimonial-arrow.next");
  const counter = document.getElementById("testimonial-current");
  const viewport = document.querySelector(".testimonial-viewport");

  if (!track || !cards.length || !viewport) return;

  let current = 0;
  let startX = 0;
  let endX = 0;

  function showSlide(index) {
    current = (index + cards.length) % cards.length;

    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });

    if (counter) {
      counter.textContent = String(current + 1).padStart(2, "0");
    }
  }

  prev?.addEventListener("click", () => {
    showSlide(current - 1);
  });

  next?.addEventListener("click", () => {
    showSlide(current + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  viewport.addEventListener("touchstart", event => {
    startX = event.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", event => {
    endX = event.changedTouches[0].clientX;

    const distance = endX - startX;

    if (Math.abs(distance) > 45) {
      showSlide(current + (distance < 0 ? 1 : -1));
    }
  }, { passive: true });

  showSlide(0);
})();
