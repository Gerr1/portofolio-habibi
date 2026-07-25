// 1. Inisialisasi AOS (Animasi saat Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    easing: 'ease-out-cubic'
});

// 2. Inisialisasi Slider Musik (Swiper.js)
const swiper = new Swiper('.music-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// 3. Logika Audio: Pause lagu lain saat satu lagu dimainkan
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

// 4. Efek Navbar Background saat di-scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid var(--accent-red)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.borderBottom = '1px solid var(--border-color)';
    }
});