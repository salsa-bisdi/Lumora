PAUSE WEBSITE UPDATE — PANDUAN INSTALASI

ISI PAKET
- index.html: halaman utama baru dengan animasi masuk, reveal saat scroll, navigasi mobile, preview produk, testimonial carousel.
- shop.html: halaman katalog dan form pemesanan.
- style.css: desain responsive desktop/tablet/mobile.
- script.js: navigasi, animasi, data produk, carousel testimoni, tombol WhatsApp.
- shop.js: pencarian, filter kategori, pagination, pilih produk otomatis di form, kirim form ke WhatsApp.
- assets/products/: 10 ilustrasi placeholder produk bernama product-01.svg sampai product-10.svg.
- assets/testimonials/: 6 avatar placeholder bernama customer-01.svg sampai customer-06.svg.
- assets/hero/: ilustrasi hero.

PENTING SEBELUM LIVE
1. Buka script.js lalu ganti whatsappNumber "6281234567890" dengan nomor WhatsApp bisnis resmi. Format: 62 + nomor, tanpa +, spasi, atau strip.
2. Ganti harga, nama, deskripsi, kategori produk di array productData pada script.js. Harga saat ini contoh/dummy.
3. Ganti file SVG dalam assets/products dan assets/testimonials dengan foto asli. Cara paling mudah: unggah foto JPG/WEBP ke folder yang sama di GitHub, lalu ubah ekstensi/nama pada path di script.js. Contoh: assets/products/product-01.jpg.
4. Foto/ulasan testimoni saat ini adalah placeholder, bukan testimoni pelanggan asli. Jangan tayangkan sebagai review nyata; ganti nama, foto, dan komentar dengan materi pelanggan yang memberi izin.
5. Logo: paket menggunakan assets/pause-logo.png yang sudah ada di repo sebelumnya. Jangan hapus file logo lama.
6. Upload isi folder paket ke root repository GitHub PAUSE, pertahankan folder assets lama (termasuk pause-logo.png). Jika GitHub meminta replace untuk index.html/style.css/script.js, pilih replace karena paket ini adalah versi lengkap yang saling terhubung.
7. Vercel akan deploy otomatis setelah commit ke branch yang terhubung. Buka / untuk homepage dan /shop.html untuk toko.

FITUR YANG SUDAH TERHUBUNG
- Menu Home/Our Story/Shop/Testimonials/Contact.
- Semua tombol Shop mengarah ke shop.html atau bagian katalog.
- Tombol pesan pada kartu produk memilih produk tersebut di form.
- Search dan filter kategori.
- Pagination angka (8 produk per halaman; 10 produk contoh).
- Carousel testimoni: tombol kiri/kanan, titik pagination, swipe di layar sentuh.
- Form pesanan: validasi required, hitung estimasi subtotal, lalu membuka WhatsApp dengan isi form.
- Tombol WhatsApp mengarah ke chat nomor konfigurasi.

BATASAN
- Ini frontend statis. Form membuka WhatsApp; tidak menyimpan pesanan ke database dan tidak memverifikasi pembayaran otomatis.
- Pastikan WhatsApp terpasang/terhubung dan nomor sudah benar.
- SVG yang disertakan hanya placeholder visual agar struktur aset dan layout langsung tampil. Ganti dengan foto produk dan pelanggan asli sebelum publikasi.
