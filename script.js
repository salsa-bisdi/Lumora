/*
  LUMORA CANDLE — konfigurasi kontak
  GANTI nomor dan username di bawah dengan akun bisnis yang benar sebelum website dipublikasikan.
  Format WhatsApp: kode negara + nomor, tanpa tanda +, spasi, atau strip. Contoh Indonesia: 6281234567890
*/
const LUMORA_CONFIG = {
  whatsappNumber: "6281234567890", // GANTI dengan nomor WhatsApp bisnis
  instagramUrl: "https://www.instagram.com/username_brand/", // GANTI dengan URL Instagram
  facebookUrl: "https://www.facebook.com/username_brand" // GANTI dengan URL Facebook
};

const waNumber = LUMORA_CONFIG.whatsappNumber;
const waReady = /^\d{10,15}$/.test(waNumber) && waNumber !== "6281234567890";
const waBase = waReady ? `https://wa.me/${waNumber}` : "#";
const defaultMessage = encodeURIComponent("Halo LUMORA CANDLE, saya ingin bertanya tentang produk lilin aromaterapi.");

function setWhatsAppLink(element, message = defaultMessage) {
  if (!element) return;
  element.href = waReady ? `${waBase}?text=${message}` : "#contact";
  if (!waReady) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Nomor WhatsApp belum diatur. Silakan edit whatsappNumber di file script.js.");
    });
  }
}

setWhatsAppLink(document.getElementById("main-wa"));
setWhatsAppLink(document.getElementById("floating-wa"));
const waText = document.getElementById("wa-text");
if (waText) {
  waText.href = waReady ? waBase : "#contact";
  waText.textContent = waReady ? `+${waNumber}` : "Atur nomor WhatsApp di script.js";
  if (!waReady) waText.addEventListener("click", e => { e.preventDefault(); alert("Edit whatsappNumber di file script.js terlebih dahulu."); });
}

const ig = document.getElementById("ig-link");
const fb = document.getElementById("fb-link");
if (ig) ig.href = LUMORA_CONFIG.instagramUrl;
if (fb) fb.href = LUMORA_CONFIG.facebookUrl;

document.querySelectorAll(".product-order").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = encodeURIComponent(`Halo LUMORA CANDLE, saya tertarik dengan ${product}. Boleh minta informasi detail, harga, dan ketersediaan produknya?`);
    if (!waReady) {
      alert("Nomor WhatsApp belum diatur. Silakan edit whatsappNumber di file script.js.");
      return;
    }
    window.open(`${waBase}?text=${message}`, "_blank", "noopener");
  });
});

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
document.getElementById("year").textContent = new Date().getFullYear();
