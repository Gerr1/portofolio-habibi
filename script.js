// 1. Inisialisasi AOS (Animasi saat Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });
});

// 2. Inisialisasi Slider Musik (Swiper.js)
const swiper = new Swiper('.music-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    // Hubungkan class tombol custom secara presisi
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },

    // Menghindari glitch saat dirender dalam DOM
    observer: true,
    observeParents: true,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

// 3. Logika Audio & Video: Pause media lain saat satu media dimainkan
document.addEventListener('play', function (e) {
    // Pause audio lain
    const audios = document.getElementsByTagName('audio');
    for (let i = 0; i < audios.length; i++) {
        if (audios[i] !== e.target) {
            audios[i].pause();
        }
    }

    // Pause video saat audio diputar
    const videos = document.getElementsByTagName('video');
    for (let j = 0; j < videos.length; j++) {
        if (videos[j] !== e.target) {
            videos[j].pause();
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