// <!-- 🌓 Toggle Mode Script -->
function gantiTema() {
  const isDark = document.documentElement.classList.contains("dark"); //Untuk manggil classlist dari "dark"
  if (isDark) {
    document.documentElement.classList.remove("dark"); //Hapus mode gelap
    localStorage.setItem("mode", "light"); //Ganti ke mode terang
  } else {
    document.documentElement.classList.add("dark"); //Tambahkan mode gelap
    localStorage.setItem("mode", "dark"); //Aktifkan mode gelap
  }
}

//Aktifkan mode dari localStorage saat saat halaman dibuka
window.onload = () => {
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark");
  }
};

//Tombol Humbleger Responsive HP
const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");

//Tombol menu saat tombol humberger diklik
toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tutup menu saat link di dalam nav diklik
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// <!-- AOS Script -->
AOS.init({
  once: false,
  duration: 800,
  easing: "ease-in-out",
});

// Set delay responsif
const isMobile = window.innerWidth < 640;

document.querySelectorAll("[data-aos]").forEach((el, i) => {
  el.setAttribute("data-aos-delay", isMobile ? i * 40 : i * 100);
});
