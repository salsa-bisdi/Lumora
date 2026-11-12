/* Konfigurasi toko: ganti nomor di bawah dengan nomor WhatsApp resmi PAUSE. */
const PAUSE_CONFIG={whatsappNumber:"6281234567890"};
const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const menu=$(".menu-toggle"),nav=$(".nav");
menu?.addEventListener("click",()=>{let open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
$$(".nav a").forEach(a=>a.addEventListener("click",()=>{nav?.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
$("#year")&&($("#year").textContent=new Date().getFullYear());
const revealObserver="IntersectionObserver" in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");revealObserver.unobserve(e.target)}}),{threshold:.12}):null;
$$(".reveal").forEach(el=>revealObserver?revealObserver.observe(el):el.classList.add("visible"));
const productData=[
{id:"p01",name:"Calm Morning",category:"signature",desc:"Aroma lembut untuk memulai hari.",price:89000,image:"assets/products/product-01.svg"},
{id:"p02",name:"Warm Embrace",category:"warm",desc:"Nuansa hangat untuk waktu santai.",price:95000,image:"assets/products/product-02.svg"},
{id:"p03",name:"Quiet Bloom",category:"floral",desc:"Sentuhan floral yang terasa ringan.",price:92000,image:"assets/products/product-03.svg"},
{id:"p04",name:"After Rain",category:"fresh",desc:"Kesan bersih dan segar setelah hujan.",price:92000,image:"assets/products/product-04.svg"},
{id:"p05",name:"Golden Hour",category:"warm",desc:"Aroma hangat untuk sore yang tenang.",price:99000,image:"assets/products/product-05.svg"},
{id:"p06",name:"Midnight Muse",category:"signature",desc:"Karakter aroma untuk malam hari.",price:99000,image:"assets/products/product-06.svg"},
{id:"p07",name:"Soft Linen",category:"fresh",desc:"Kesan bersih dan nyaman.",price:89000,image:"assets/products/product-07.svg"},
{id:"p08",name:"Vanilla Cloud",category:"warm",desc:"Manis lembut yang menenangkan.",price:95000,image:"assets/products/product-08.svg"},
{id:"p09",name:"Forest Notes",category:"fresh",desc:"Nuansa natural terinspirasi alam.",price:95000,image:"assets/products/product-09.svg"},
{id:"p10",name:"Sunday Slow",category:"floral",desc:"Aroma lembut untuk akhir pekan.",price:92000,image:"assets/products/product-10.svg"}];
const reviews=[
{image:"assets/testimonials/customer-01.svg",name:"Anna R.",quote:"Aku suka konsepnya yang sederhana. Lilinnya cocok untuk menemani waktu membaca di rumah."},
{image:"assets/testimonials/customer-02.svg",name:"Sarah M.",quote:"Kemasannya terlihat minimalis dan cantik untuk dijadikan hadiah."},
{image:"assets/testimonials/customer-03.svg",name:"Michelle T.",quote:"Aromanya membuat sudut ruangan terasa lebih personal dan nyaman."},
{image:"assets/testimonials/customer-04.svg",name:"Nadia P.",quote:"Suka dengan konsep slow living yang dibawa PAUSE. Simple, warm, dan thoughtful."},
{image:"assets/testimonials/customer-05.svg",name:"Clara D.",quote:"Desain glass jar-nya mudah dipadukan dengan dekorasi ruangan."},
{image:"assets/testimonials/customer-06.svg",name:"Dina L.",quote:"Pilihan hadiah yang cantik untuk orang tersayang."}];
function rupiah(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}
const homeProducts=$("#home-products");
if(homeProducts)homeProducts.innerHTML=productData.slice(0,4).map(p=>`<article class="preview-card"><a href="shop.html"><img src="${p.image}" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${rupiah(p.price)}</p></a></article>`).join("");
const tTrack=$("#testimonial-track"),tDots=$("#testimonial-dots");let tIndex=0;
if(tTrack){tTrack.innerHTML=reviews.map(r=>`<article class="testimonial-card"><img src="${r.image}" alt="Foto profil contoh ${r.name}" loading="lazy"><div><span class="stars">★★★★★</span><blockquote>“${r.quote}”</blockquote><h3>${r.name}</h3><small>Contoh ulasan · Ganti dengan ulasan pelanggan asli</small></div></article>`).join("");tDots.innerHTML=reviews.map((_,i)=>`<button aria-label="Buka testimoni ${i+1}" data-slide="${i}"></button>`).join("");function showReview(i){tIndex=(i+reviews.length)%reviews.length;tTrack.style.transform=`translateX(-${tIndex*100}%)`;$$("#testimonial-dots button").forEach((b,j)=>b.classList.toggle("active",j===tIndex));}$("#testimonial-prev")?.addEventListener("click",()=>showReview(tIndex-1));$("#testimonial-next")?.addEventListener("click",()=>showReview(tIndex+1));$$("#testimonial-dots button").forEach(b=>b.addEventListener("click",()=>showReview(Number(b.dataset.slide))));let touchX=0;$(".testimonial-window")?.addEventListener("touchstart",e=>touchX=e.touches[0].clientX,{passive:true});$(".testimonial-window")?.addEventListener("touchend",e=>{let d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>40)showReview(tIndex+(d<0?1:-1))},{passive:true});showReview(0);}
const wa=$("#floating-wa");if(wa){wa.href=`https://wa.me/${PAUSE_CONFIG.whatsappNumber}`;wa.target="_blank";wa.rel="noopener";}