# LUMORA CANDLE — Website Company Profile

Website one-page untuk brand lilin aromaterapi LUMORA CANDLE. Dibuat dengan HTML, CSS, dan JavaScript murni agar mudah diunggah ke GitHub dan di-deploy melalui Vercel.

## Isi website
- Hero / brand introduction
- Company profile, cerita brand, dan nilai usaha
- Product overview dengan empat contoh varian
- Digital content showcase dan contoh copywriting
- Informasi cara menikmati produk dengan aman
- Kontak WhatsApp, Instagram, Facebook, dan CTA pemesanan
- Responsive untuk desktop, tablet, dan ponsel

## Sebelum dipublikasikan — wajib disesuaikan
Website ini disiapkan sebagai starter untuk bisnis nyata. Beberapa detail masih berupa contoh dan belum boleh dianggap sebagai fakta bisnis yang sudah terverifikasi.

1. Buka `script.js`.
2. Ganti `whatsappNumber` dengan nomor WhatsApp bisnis dalam format internasional tanpa `+`, spasi, atau strip. Contoh format: `6281234567890`.
3. Ganti `instagramUrl` dan `facebookUrl` dengan tautan akun resmi brand.
4. Periksa nama, cerita usaha, varian produk, harga, foto, jam operasional, dan klaim produk agar sesuai keadaan bisnis sebenarnya.
5. Harga produk saat ini merupakan harga contoh dalam rentang yang diminta. Sesuaikan dengan harga jual aktual.
6. Foto menggunakan URL gambar dari Unsplash. Ganti dengan foto produk milik sendiri jika tersedia dan pastikan hak penggunaannya sesuai.

## Menjalankan secara lokal
Cukup buka `index.html` di browser. Untuk pengalaman pengembangan yang lebih baik, gunakan ekstensi Live Server di VS Code.

## Deploy dengan GitHub + Vercel
1. Ekstrak ZIP ini.
2. Buat repository baru di GitHub, misalnya `lumora-candle`.
3. Upload seluruh isi folder ini ke root repository (pastikan `index.html` tidak berada di dalam folder bertingkat tambahan).
4. Buka https://vercel.com dan login dengan GitHub.
5. Pilih **Add New → Project**, lalu import repository `lumora-candle`.
6. Untuk proyek HTML statis, pilih **Other** / tanpa framework. Build command dan output directory dapat dikosongkan; root directory tetap `./`.
7. Klik **Deploy**.
8. Setelah selesai, buka URL `.vercel.app` yang diberikan Vercel.

Setiap push/commit baru ke branch yang terhubung akan memicu deployment baru secara otomatis.

## Catatan
- Tidak ada backend atau database karena kebutuhan tugas berupa website profil satu halaman.
- Form pemesanan diarahkan ke WhatsApp; tidak ada transaksi atau pembayaran otomatis.
- Website tidak mengumpulkan data pengunjung.
