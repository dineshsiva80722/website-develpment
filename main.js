
window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.loader-bar');
    
    bars.forEach((bar) => {
        // Generates a random delay between 0 and 300ms for a "fast" feel
        const randomDelay = Math.random() * 0.3; 
        bar.style.transitionDelay = `${randomDelay}s`;
        
        // Trigger the animation
        setTimeout(() => {
            bar.classList.add('exit');
        }, 100); 
    });

    // Remove the wrapper from DOM after animation finishes to save memory
    setTimeout(() => {
        document.getElementById('loader-wrapper').style.display = 'none';
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.textileSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, 
        
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
});

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        outline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const hoverTargets = "a, button, .contact-info-box, input, textarea, .custom-next, .custom-prev";
    document.querySelectorAll(hoverTargets).forEach(el => {
        el.addEventListener("mouseenter", () => {
            dot.style.transform = "translate(-50%, -50%) scale(0)";
            outline.style.transform = "translate(-50%, -50%) scale(1.5)";
            outline.style.background = "rgba(0, 97, 255, 0.1)";
        });
        el.addEventListener("mouseleave", () => {
            dot.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.background = "transparent";
        });
    });

   
const animateCounter = () => {
    const counter = document.getElementById('meterCounter');
    const target = +counter.getAttribute('data-target');
    const duration = 2000; 
    const increment = target / (duration / 16); 

    const updateCount = () => {
        const count = +counter.innerText.replace(/,/g, '');
        if (count < target) {
            const nextCount = Math.ceil(count + increment);
            counter.innerText = (nextCount > target ? target : nextCount).toLocaleString();
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCount();
};

const observerOptions = {
    threshold: 0.5 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.getElementById('meterCounter');
    if (targetElement) observer.observe(targetElement);
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.style.background = "rgba(11, 17, 32, 0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.padding = "15px 0";
    } else {
        header.style.background = "transparent";
        header.style.padding = "25px 0";
    }
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-light', 'shadow-sm');
        header.style.padding = '15px 0'; 
    } else {
        header.classList.remove('scrolled-light', 'shadow-sm');
        header.style.padding = '25px 0';
    }
});

const bodyElement = document.body;
const themeLabel = document.getElementById('themeStatusLabel');
const btnDark = document.getElementById('setDarkMode');
const btnLight = document.getElementById('setLightMode');

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

btnDark.addEventListener('click', () => {
    enableDarkMode();
});

btnLight.addEventListener('click', () => {
    enableLightMode();
});

function enableLightMode() {
    bodyElement.classList.add('light-mode');
    themeLabel.innerText = "Light Version";
    
    btnLight.classList.replace('btn-outline-dark', 'btn-primary');
    btnDark.classList.replace('btn-primary', 'btn-outline-dark');
    
    localStorage.setItem('theme', 'light');
}

function enableDarkMode() {
    bodyElement.classList.remove('light-mode');
    themeLabel.innerText = "Dark Version";
    
    btnDark.classList.replace('btn-outline-dark', 'btn-primary');
    btnLight.classList.replace('btn-primary', 'btn-outline-dark');
    
    localStorage.setItem('theme', 'dark');
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.stack-container');
    
    const observerOptions = {
        threshold: 0.6 // Triggers when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // User is near/at the cards: Line them up horizontally
                container.classList.add('is-visible');
            } else {
                // User scrolled back up: Stack them again
                if (entry.boundingClientRect.top > 0) {
                    container.classList.remove('is-visible');
                }
            }
        });
    }, observerOptions);

    observer.observe(container);
});

// Initialize Slider
$(document).ready(function(){
    $('.carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        // Custom Navigation Positioning
        appendArrows: '.slick-nav-container', 
        appendDots: '.custom-slick-dots',
        prevArrow: '<button type="button" class="slick-prev-custom"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next-custom"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });

    // Move arrows to their specific slots if appendArrows didn't split them
    $('.slick-prev-custom').appendTo('.custom-slick-prev');
    $('.slick-next-custom').appendTo('.custom-slick-next');
});