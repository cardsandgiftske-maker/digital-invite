function openInvitation() {
    const envelope = document.getElementById('envelope-overlay');
    envelope.style.transform = 'translateY(-100%)';
    document.body.style.overflow = 'auto'; // Enable scrolling
}

document.addEventListener('DOMContentLoaded', () => {
    // Set Date: Year, Month(0-11), Day, Hour, Min
    const weddingDate = new Date(2026, 4, 24, 15, 0, 0).getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.getElementById('timer').innerHTML = "<h3>The Big Day is Here!</h3>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Update elements using backticks (`)
        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
    };

    setInterval(updateTimer, 1000);
    updateTimer();
});
// Add this to your existing script.js
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Target all elements with the 'reveal' class
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => observer.observe(target));
}

// Call this function inside your existing openInvitation function
function openInvitation() {
    const envelope = document.getElementById('envelope-overlay');
    envelope.style.transform = 'translateY(-100%)';
    document.body.style.overflow = 'auto'; 
    
    // Start animations once envelope is opened
    initScrollAnimations();
}
function openInvitation() {
    const envelope = document.getElementById('envelope-overlay');
    
    // Slide up and out of view
    envelope.style.transform = 'translateY(-100%)';
    envelope.style.opacity = '0';
    
    // Allow the website behind it to be scrollable
    document.body.style.overflow = 'auto';
    
    // Remove from DOM after animation so it doesn't interfere with clicks
    setTimeout(() => {
        envelope.style.display = 'none';
        // Trigger the scroll reveal animations we created earlier
        initScrollAnimations();
    }, 1000);
}
function openInvitation() {
      const audio = document.getElementById('wedding-bells');
    
    // Initial volume at 0
    audio.volume = 0;
    audio.play();

    // Gradually increase volume to 0.5 (50%) over 2 seconds
    let vol = 0;
    const fadeIn = setInterval(() => {
        if (vol < 0.5) {
            vol += 0.05;
            audio.volume = vol;
        } else {
            clearInterval(fadeIn);
        }
    }, 200);

    const envelope = document.getElementById('envelope-overlay');
    const img = document.getElementById('main-envelope');

    // 1. Zoom the image slightly
    img.style.transition = "transform 0.5s ease";
    img.style.transform = "scale(1.1)";

    // 2. Slide the whole overlay up
    setTimeout(() => {
        envelope.style.transform = 'translateY(-100%)';
        envelope.style.opacity = '0';
        
        // Allow scrolling on the main site
        document.body.style.overflow = 'auto';
    }, 300);

    // 3. Remove from view and start scroll animations
    setTimeout(() => {
        envelope.style.display = 'none';
        if (typeof initScrollAnimations === "function") {
            initScrollAnimations();
        }
    }, 1300);
}
// Add this to the bottom of your script.js
document.addEventListener('mousemove', (e) => {
    createSparkle(e.pageX, e.pageY);
});

document.addEventListener('touchmove', (e) => {
    // For mobile touch support
    createSparkle(e.touches[0].pageX, e.touches[0].pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Randomize size slightly for a natural look
    const size = Math.random() * 8 + 2 + 'px';
    sparkle.style.width = size;
    sparkle.style.height = size;
    
    // Position the sparkle at the touch/mouse point
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    document.body.appendChild(sparkle);
    
    // Remove the sparkle after the animation finishes (1 second)
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}
// Function to open the Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// Function to close the Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restart background scrolling
}

// Update your gallery HTML dynamically to make them clickable
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src);
    });
});
window.addEventListener('scroll', function() {
    const scrollContainer = document.querySelector('.hero-scroll-container');
    const scrollPosition = window.scrollY;
    
    // Calculate values based on scroll (adjust 400 to change speed)
    let opacityValue = 1 - (scrollPosition / 400);
    let moveValue = scrollPosition * -0.5; // Moves text up at half scroll speed

    // Apply styles dynamically
    if (opacityValue >= 0) {
        scrollContainer.style.opacity = opacityValue;
        scrollContainer.style.transform = translateY($`{moveValue}px`);
    } else {
        scrollContainer.style.opacity = 0;
    }
});
window.addEventListener('scroll', function() {
    const audio = document.getElementById('wedding-bells');
    const gallerySection = document.querySelector('.gallery-section');
    
    if (!audio.paused) {
        const rect = gallerySection.getBoundingClientRect();
        
        // If the gallery is in view
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Lower volume to 10%
            audio.volume = 0.1;
        } else {
            // Restore volume to 50%
            audio.volume = 0.5;
        }
    }

});
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    
    // Add a slight delay so the user actually sees the beautiful loader
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1500);
});
