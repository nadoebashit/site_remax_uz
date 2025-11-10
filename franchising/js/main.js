// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation for sections
    const fadeElements = document.querySelectorAll('.stat-box, .benefit-item, .step, .tech-box, .investment-item');
    
    // Add fade-in class to all elements that should animate
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check on page load
    handleScrollAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Form submission handling
    const heroForm = document.getElementById('hero-form');
    const ctaForm = document.getElementById('cta-form');
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const formId = e.target.id;
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show a success message
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.</p>
        `;
        
        // Replace form with success message
        e.target.innerHTML = '';
        e.target.appendChild(successMessage);
        
        // Reset form after 5 seconds (for demo purposes)
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    
    // Add event listeners to forms
    if (heroForm) {
        heroForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (ctaForm) {
        ctaForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .stat-box, .benefit-item, .tech-box, .investment-item, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add CSS class for success message
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            text-align: center;
            padding: 30px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 6px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .success-message i {
            font-size: 3rem;
            color: #4CAF50;
            margin-bottom: 15px;
        }
        
        .success-message p {
            font-size: 1.1rem;
            color: #333;
        }
    `;
    document.head.appendChild(style);
});

// Add CSS class for phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Format phone number as user types
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 1) {
                    value = '+7 (' + value;
                } else if (value.length <= 4) {
                    value = '+7 (' + value.substring(1, 4);
                } else if (value.length <= 7) {
                    value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7);
                } else if (value.length <= 9) {
                    value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9);
                } else {
                    value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
                }
            }
            e.target.value = value;
        });
    });
    // Бургер-меню
const toggle  = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');

if (toggle && navList) {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('open');
    });
}
});
