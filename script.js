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
