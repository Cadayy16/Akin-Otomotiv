const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    })
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

$(document).ready(function () {
    $('.search-button').on('click', function () {
        $('.search').toggleClass('active');
    });


    $('.search-overlay').on('click', function () {
        $('.search').removeClass('active');
    });
});



const swiperHome = new Swiper('.home_swiper', {
    speed: 500,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, "0") + "</span>";
        },
    },

    on: {
        slideChangeTransitionStart: function () {
            resetAnimations();
        },
        slideChangeTransitionEnd: function () {
            animateTitles();
        }
    }
});


function resetAnimations() {
    gsap.killTweensOf('.home_titles');
    gsap.killTweensOf('.home_title');
    gsap.set('.home_titles', { opacity: 0, x: 500 });
    gsap.set('.home_title', { opacity: 0, x: 500 });
}


function animateTitles() {
    gsap.fromTo('.home_titles',
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, clearProps: 'all' }
    );

    gsap.fromTo('.home_title',
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, clearProps: 'all' }
    );
}


const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');

    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('scroll', blurHeader);


function applyGSAPAnimations() {
    if (window.innerWidth < 1150) {
        gsap.set('.home_panel-1', { clearProps: "all" });
        gsap.set('.home_panel-2', { clearProps: "all" });

        gsap.from('.home_panel-1', {
            y: -250,
            duration: 0.5,
        });

        gsap.from('.home_panel-2', {
            y: 1000,
            duration: 1,
        });
    } else {
        gsap.set('.home_panel-1', { clearProps: "all" });
        gsap.set('.home_panel-2', { clearProps: "all" });

        gsap.from('.home_panel-1', {
            x: -250,
            duration: 1,
        });

        gsap.from('.home_panel-2', {
            y: 1000,
            duration: 2,
        });
    }
}
applyGSAPAnimations();
window.addEventListener('resize', applyGSAPAnimations);

gsap.from('.home_image', {
    x: 1000,
    duration: 2,
});

gsap.from('.home_titles', {
    x: 500,
    opacity: 0,
    delay: 1,
});

gsap.from('.home_title', {
    x: 500,
    opacity: 0,
    delay: 1.1,
});


(() => {
    const counters = document.querySelectorAll('.counter');
    let hasStarted = false;

    function startCounter(item) {
        let counterInnerText = parseInt(item.textContent, 10);
        let count = 1;
        let speed = parseInt(item.dataset.speed, 10) / counterInnerText;

        function counterUp() {
            item.textContent = count++;
            if (count > counterInnerText) {
                clearInterval(stop);
            }
        }

        const stop = setInterval(counterUp, speed);
    }

    function checkScroll() {
        const section = document.querySelector('.home-section-04');
        const sectionTop = section.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.8;

        if (sectionTop < triggerHeight && !hasStarted) {
            counters.forEach((item) => {
                startCounter(item);
            });
            hasStarted = true;
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
})();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".ri-arrow-right-s-line",
        prevEl: ".ri-arrow-left-s-line",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});




