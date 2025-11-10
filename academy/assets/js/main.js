/**
 * RE/MAX Academy Kazakhstan Landing Page
 * Main JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initProgramSliders();
    initTestimonialSlider();
    initFaqAccordion();
    initInstructorCards();
    initSmoothScrolling();
    // initHeaderScroll();
});

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (!menuToggle) return;
    
    menuToggle.addEventListener('click', function() {
        // Toggle active class on menu button
        this.classList.toggle('active');
        
        // Create mobile menu container if it doesn't exist
        let mobileMenu = document.querySelector('.mobile-menu');
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            
            // Clone navigation links and actions
            const navLinksClone = navLinks.cloneNode(true);
            const navActionsClone = navActions.cloneNode(true);
            
            mobileMenu.appendChild(navLinksClone);
            mobileMenu.appendChild(navActionsClone);
            
            // Append to header
            document.querySelector('.site-header .container').appendChild(mobileMenu);
        }
        
        // Toggle mobile menu visibility
        mobileMenu.classList.toggle('active');
        
        // Toggle menu button appearance
        const bars = menuToggle.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        }
    });
}

/**
 * Program Sliders Functionality
 */
function initProgramSliders() {
    const sliders = document.querySelectorAll('.program-slider');
    
    sliders.forEach(slider => {
        const cards = slider.querySelector('.program-cards');
        const prevBtn = slider.querySelector('.prev-arrow');
        const nextBtn = slider.querySelector('.next-arrow');
        const dots = slider.closest('.programs-section').querySelectorAll('.dot');
        
        if (!cards || !prevBtn || !nextBtn) return;
        
        // Set initial state
        let currentPage = 0;
        const cardWidth = cards.querySelector('.program-card').offsetWidth;
        const cardsPerPage = Math.floor(cards.offsetWidth / cardWidth);
        const totalCards = cards.querySelectorAll('.program-card').length;
        const totalPages = Math.ceil(totalCards / cardsPerPage);
        
        // Update dots
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentPage);
            });
        }
        
        // Scroll to page
        function scrollToPage(page) {
            currentPage = page;
            const scrollAmount = page * cardsPerPage * (cardWidth + 24); // 24px is the gap
            cards.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            updateDots();
        }
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                scrollToPage(currentPage - 1);
            }
        });
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                scrollToPage(currentPage + 1);
            }
        });
        
        // Dot clicks
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                scrollToPage(index);
            });
        });
        
        // Handle manual scrolling
        cards.addEventListener('scroll', () => {
            const scrollPosition = cards.scrollLeft;
            const pageWidth = cardsPerPage * (cardWidth + 24);
            currentPage = Math.round(scrollPosition / pageWidth);
            updateDots();
        });
    });
}

/**
 * Testimonial Slider Functionality
 */
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;
    
    const cards = slider.querySelector('.testimonial-cards');
    const prevBtn = slider.querySelector('.prev-arrow');
    const nextBtn = slider.querySelector('.next-arrow');
    const dots = document.querySelector('.testimonials-section').querySelectorAll('.dot');
    
    // Set initial state
    let currentPage = 0;
    const cardWidth = cards.querySelector('.testimonial-card').offsetWidth;
    const cardsPerPage = Math.floor(cards.offsetWidth / cardWidth);
    const totalCards = cards.querySelectorAll('.testimonial-card').length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    
    // Update dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }
    
    // Scroll to page
    function scrollToPage(page) {
        currentPage = page;
        const scrollAmount = page * cardsPerPage * (cardWidth + 32); // 32px is the gap
        cards.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateDots();
    }
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            scrollToPage(currentPage - 1);
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            scrollToPage(currentPage + 1);
        }
    });
    
    // Dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToPage(index);
        });
    });
    
    // Auto-rotate testimonials
    let autoRotateInterval = setInterval(() => {
        if (currentPage < totalPages - 1) {
            scrollToPage(currentPage + 1);
        } else {
            scrollToPage(0);
        }
    }, 5000);
    
    // Pause auto-rotation on hover
    cards.addEventListener('mouseenter', () => {
        clearInterval(autoRotateInterval);
    });
    
    // Resume auto-rotation on mouse leave
    cards.addEventListener('mouseleave', () => {
        autoRotateInterval = setInterval(() => {
            if (currentPage < totalPages - 1) {
                scrollToPage(currentPage + 1);
            } else {
                scrollToPage(0);
            }
        }, 5000);
    });
}

/**
 * FAQ Accordion Functionality
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-icon i').className = 'fas fa-plus';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Update icon
            const icon = question.querySelector('.faq-icon i');
            if (item.classList.contains('active')) {
                icon.className = 'fas fa-minus';
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                icon.className = 'fas fa-plus';
                answer.style.maxHeight = null;
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            }
        });
    });
    
    // Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
        faqItems[0].querySelector('.faq-answer').style.display = 'block';
        faqItems[0].querySelector('.faq-icon i').className = 'fas fa-minus';
    }
}

/**
 * Instructor Cards Hover Effect
 */
function initInstructorCards() {
    const instructorCards = document.querySelectorAll('.instructor-card');
    
    instructorCards.forEach(card => {
        const bio = card.querySelector('.instructor-bio');
        
        // For touch devices
        card.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Don't trigger if clicking on a link
                if (e.target.tagName.toLowerCase() === 'a') return;
                
                // Toggle bio visibility
                if (bio.style.opacity === '1') {
                    bio.style.opacity = '0';
                    bio.style.maxHeight = '0';
                } else {
                    bio.style.opacity = '1';
                    bio.style.maxHeight = '200px';
                }
            }
        });
    });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    
                    const bars = menuToggle.querySelectorAll('.bar');
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
                
                // Calculate header height for offset
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header Scroll Effect
 */
// function initHeaderScroll() {
//     const header = document.querySelector('.site-header');
//     let lastScrollTop = 0;
    
//     window.addEventListener('scroll', () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         // Add shadow and background opacity based on scroll position
//         if (scrollTop > 50) {
//             header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//             header.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
//         } else {
//             header.style.boxShadow = 'none';
//             header.style.backgroundColor = 'rgba(15, 15, 15, 0.8)';
//         }
        
//         // Hide/show header on scroll up/down (optional)
//         /*
//         if (scrollTop > lastScrollTop && scrollTop > 200) {
//             // Scrolling down
//             header.style.transform = 'translateY(-100%)';
//         } else {
//             // Scrolling up
//             header.style.transform = 'translateY(0)';
//         }
//         */
        
//         lastScrollTop = scrollTop;
//     });
// }

/**
 * Placeholder Image Generator
 * This function creates colored placeholder backgrounds for missing images
 * It's useful during development before actual images are available
 */
function initPlaceholderImages() {
    const placeholderImages = document.querySelectorAll('img[src*="placeholder"]');
    
    placeholderImages.forEach(img => {
        // Create canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set dimensions
        canvas.width = img.width || 300;
        canvas.height = img.height || 200;
        
        // Generate random color
        const hue = Math.floor(Math.random() * 360);
        ctx.fillStyle = `hsl(${hue}, 70%, 30%)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Placeholder Image', canvas.width / 2, canvas.height / 2);
        
        // Replace src with canvas data URL
        img.src = canvas.toDataURL();
    });
}

// Call placeholder image generator after window loads
window.addEventListener('load', initPlaceholderImages);
document.addEventListener("DOMContentLoaded", function () {
    // Select all trigger buttons
    const enrollButtons = document.querySelectorAll("a.btn-primary, a.btn-secondary");
    const modal = document.getElementById("enroll-modal");
    const closeBtn = modal.querySelector(".enroll-modal-close");

    // Filter only the buttons with exact text
    enrollButtons.forEach(btn => {
        if (["ЗАПИСАТЬСЯ СЕЙЧАС", "ЗАПИСАТЬСЯ"].includes(btn.textContent.trim().toUpperCase())) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                modal.classList.add("active");
            });
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enroll-form");
    const successMsg = document.getElementById("success-message");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                successMsg.classList.add("active");
                form.style.display = "none";
    
                // Change the form title
                const title = document.getElementById("form-title");
                if (title) {
                    title.textContent = "СПАСИБО";
                    title.style.textAlign = "center";
                }
            }
        })
        .catch(() => {
            alert("Ошибка соединения. Пожалуйста, проверьте интернет.");
        });
    });
});
