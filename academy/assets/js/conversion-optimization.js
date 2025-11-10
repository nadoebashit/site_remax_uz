/**
 * RE/MAX Academy Kazakhstan Landing Page
 * Additional JavaScript for Conversion Optimization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize conversion optimization features
    initScrollReveal();
    initBackToTop();
    initScrollProgress();
    // initExitIntent();
    initCountdown();
    initStickyCTA();
    // initFormValidation();
});

/**
 * Scroll Reveal Animation
 * Animates elements as they come into view during scrolling
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const staggerElements = document.querySelectorAll('.stagger-reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        // Regular reveal elements
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
        
        // Staggered reveal elements
        staggerElements.forEach(group => {
            const groupTop = group.getBoundingClientRect().top;
            if (groupTop < windowHeight - revealPoint) {
                group.classList.add('active');
            }
        });
    }
    
    // Check on initial load
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
}

/**
 * Back to Top Button
 * Shows a button to scroll back to top when user scrolls down
 */
function initBackToTop() {
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Scroll Progress Indicator
 * Shows a progress bar at the top of the page indicating scroll progress
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/**
 * Exit Intent Modal
 * Shows a modal when user is about to leave the page
 */
function initExitIntent() {
    // Create exit modal
    const exitModal = document.createElement('div');
    exitModal.className = 'exit-modal';
    exitModal.innerHTML = `
        <div class="exit-modal-content">
            <button class="exit-modal-close"><i class="fas fa-times"></i></button>
            <h3 class="exit-modal-title"> Подожди секунду — не пропусти этот шанс.</h3>
            <p class="exit-modal-text">Присоединяйтесь к RE/MAX Academy сегодня и сделайте первый шаг к развитию своей карьеры в сфере недвижимости в Узбекистане.</p>
            <a href="#enroll" class="btn btn-primary">Зарегистрируйтесь</a>
        </div>
    `;
    document.body.appendChild(exitModal);
    
    // Close button functionality
    const closeButton = exitModal.querySelector('.exit-modal-close');
    closeButton.addEventListener('click', () => {
        exitModal.classList.remove('active');
        // Set cookie to prevent showing again in this session
        document.cookie = "exitModalShown=true; max-age=3600; path=/";
    });
    
    // Link in modal should close the modal
    const modalLink = exitModal.querySelector('a');
    modalLink.addEventListener('click', () => {
        exitModal.classList.remove('active');
    });
    
    // Show modal on exit intent
    let showModal = true;
    
    // Check if modal was already shown
    if (document.cookie.split(';').some((item) => item.trim().startsWith('exitModalShown='))) {
        showModal = false;
    }
    
    // Only trigger after user has been on the page for at least 5 seconds
    setTimeout(() => {
        if (showModal) {
            document.addEventListener('mouseout', (e) => {
                // If mouse leaves the top of the page
                if (e.clientY < 5 && !exitModal.classList.contains('active')) {
                    exitModal.classList.add('active');
                    // Set cookie to prevent showing again in this session
                    document.cookie = "exitModalShown=true; max-age=3600; path=/";
                }
            });
        }
    }, 5000);
}

/**
 * Countdown Timer
 * Shows a countdown to create urgency
 */
function initCountdown() {
    // Add countdown to enrollment section
    const enrollmentSection = document.querySelector('.enrollment-section .enrollment-content');
    if (!enrollmentSection) return;
    
    const countdownContainer = document.createElement('div');
    countdownContainer.className = 'countdown-container';
    countdownContainer.innerHTML = `
        <p class="countdown-title">Регистрация заканчивается через:</p>
        <div class="countdown">
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-days">00</span>
                <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-hours">00</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-minutes">00</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-seconds">00</span>
                <span class="countdown-label">Seconds</span>
            </div>
        </div>
    `;
    
    // Insert after the first child of enrollment content
    enrollmentSection.insertBefore(countdownContainer, enrollmentSection.children[1]);
    
    // Set countdown date (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    
    // Update countdown every second
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update DOM
        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

/**
 * Sticky CTA for Mobile
 * Shows a sticky CTA button at the bottom of the screen on mobile
 */
function initStickyCTA() {
    // Only add for mobile devices
    if (window.innerWidth <= 768) {
        const stickyCTA = document.createElement('div');
        stickyCTA.className = 'sticky-cta';
        stickyCTA.innerHTML = `<a href="#enroll" class="btn btn-primary">Зарегистрируйтесь</a>`;
        document.body.appendChild(stickyCTA);
        
        // Hide when enrollment section is in view
        window.addEventListener('scroll', () => {
            const enrollSection = document.getElementById('enroll');
            if (enrollSection) {
                const rect = enrollSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    stickyCTA.style.opacity = '0';
                    stickyCTA.style.visibility = 'hidden';
                } else {
                    stickyCTA.style.opacity = '1';
                    stickyCTA.style.visibility = 'visible';
                }
            }
        });
    }
}

/**
 * Form Validation
 * Validates form inputs and shows error messages
 */
// function initFormValidation() {
//     // Add form to enrollment section
//     const enrollmentSection = document.querySelector('.enrollment-section');
//     if (!enrollmentSection) return;
    
//     // Create form container
//     const formContainer = document.createElement('div');
//     formContainer.className = 'enrollment-form-container';
//     formContainer.innerHTML = `
//         <div class="success-message">
//             <i class="fas fa-check-circle"></i> Thank you for your interest! We'll contact you shortly with more information.
//         </div>
//         <form class="enrollment-form" id="enrollment-form">
//             <div class="enrollment-progress">
//                 <div class="progress-step active">
//                     <div class="progress-step-number">1</div>
//                     <div class="progress-step-label">Info</div>
//                 </div>
//                 <div class="progress-step">
//                     <div class="progress-step-number">2</div>
//                     <div class="progress-step-label">Program</div>
//                 </div>
//                 <div class="progress-step">
//                     <div class="progress-step-number">3</div>
//                     <div class="progress-step-label">Complete</div>
//                 </div>
//             </div>
            
//             <div class="form-step active" id="form-step-1">
//                 <div class="form-group form-floating">
//                     <input type="text" class="form-input" id="name" placeholder=" " required>
//                     <label for="name" class="form-label">Full Name</label>
//                     <div class="error-message"></div>
//                 </div>
                
//                 <div class="form-group form-floating">
//                     <input type="email" class="form-input" id="email" placeholder=" " required>
//                     <label for="email" class="form-label">Email Address</label>
//                     <div class="error-message"></div>
//                 </div>
                
//                 <div class="form-group form-floating">
//                     <input type="tel" class="form-input" id="phone" placeholder=" " required>
//                     <label for="phone" class="form-label">Phone Number</label>
//                     <div class="error-message"></div>
//                 </div>
                
//                 <button type="button" class="btn btn-primary form-submit" id="next-step-1">Continue</button>
//             </div>
            
//             <div class="form-step" id="form-step-2">
//                 <div class="form-group">
//                     <label for="program-type" class="form-label">I am interested in:</label>
//                     <select class="form-input" id="program-type" required>
//                         <option value="">Select an option</option>
//                         <option value="agent">Real Estate Agent Programs</option>
//                         <option value="franchise">Franchise Owner Programs</option>
//                         <option value="both">Both Agent and Franchise Programs</option>
//                     </select>
//                     <div class="error-message"></div>
//                 </div>
                
//                 <div class="form-group">
//                     <label for="experience" class="form-label">My experience level:</label>
//                     <select class="form-input" id="experience" required>
//                         <option value="">Select an option</option>
//                         <option value="beginner">Beginner (0-1 years)</option>
//                         <option value="intermediate">Intermediate (1-3 years)</option>
//                         <option value="experienced">Experienced (3+ years)</option>
//                     </select>
//                     <div class="error-message"></div>
//                 </div>
                
//                 <div class="form-group">
//                     <label for="message" class="form-label">Additional information (optional):</label>
//                     <textarea class="form-input" id="message" rows="3" placeholder="Tell us more about your goals..."></textarea>
//                 </div>
                
//                 <div class="form-buttons">
//                     <button type="button" class="btn btn-secondary" id="prev-step-2">Back</button>
//                     <button type="submit" class="btn btn-primary form-submit">Submit Application</button>
//                 </div>
//             </div>
//         </form>
        
//         <div class="trust-badges">
//             <div class="trust-badge">
//                 <i class="fas fa-lock"></i> Secure Form
//             </div>
//             <div class="trust-badge">
//                 <i class="fas fa-shield-alt"></i> Privacy Protected
//             </div>
//             <div class="trust-badge">
//                 <i class="fas fa-check-circle"></i> No Obligation
//             </div>
//         </div>
//     `;
    
//     // Add form to the page
//     const programOptions = enrollmentSection.querySelector('.program-options');
//     if (programOptions) {
//         enrollmentSection.querySelector('.container').insertBefore(formContainer, programOptions.nextSibling);
//     } else {
//         enrollmentSection.querySelector('.container').appendChild(formContainer);
//     }
    
//     // Form validation and multi-step functionality
//     const form = document.getElementById('enrollment-form');
//     const step1 = document.getElementById('form-step-1');
//     const step2 = document.getElementById('form-step-2');
//     const nextStep1Button = document.getElementById('next-step-1');
//     const prevStep2Button = document.getElementById('prev-step-2');
//     const progressSteps = document.querySelectorAll('.progress-step');
    
//     // Validate step 1 and move to step 2
//     nextStep1Button.addEventListener('click', () => {
//         const nameInput = document.getElementById('name');
//         const emailInput = document.getElementById('email');
//         const phoneInput = document.getElementById('phone');
//         let isValid = true;
        
//         // Validate name
//         if (!nameInput.value.trim()) {
//             showError(nameInput, 'Please enter your full name');
//             isValid = false;
//         } else {
//             clearError(nameInput);
//         }
        
//         // Validate email
//         if (!emailInput.value.trim()) {
//             showError(emailInput, 'Please enter your email address');
//             isValid = false;
//         } else if (!isValidEmail(emailInput.value)) {
//             showError(emailInput, 'Please enter a valid email address');
//             isValid = false;
//         } else {
//             clearError(emailInput);
//         }
        
//         // Validate phone
//         if (!phoneInput.value.trim()) {
//             showError(phoneInput, 'Please enter your phone number');
//             isValid = false;
//         } else if (!isValidPhone(phoneInput.value)) {
//             showError(phoneInput, 'Please enter a valid phone number');
//             isValid = false;
//         } else {
//             clearError(phoneInput);
//         }
        
//         // If all fields are valid, move to step 2
//         if (isValid) {
//             step1.classList.remove('active');
//             step2.classList.add('active');
//             progressSteps[0].classList.remove('active');
//             progressSteps[0].classList.add('completed');
//             progressSteps[1].classList.add('active');
//         }
//     });
    
//     // Go back to step 1
//     prevStep2Button.addEventListener('click', () => {
//         step2.classList.remove('active');
//         step1.classList.add('active');
//         progressSteps[1].classList.remove('active');
//         progressSteps[0].classList.remove('completed');
//         progressSteps[0].classList.add('active');
//     });
    
//     // Form submission
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const programTypeInput = document.getElementById('program-type');
//         const experienceInput = document.getElementById('experience');
//         let isValid = true;
        
//         // Validate program type
//         if (!programTypeInput.value) {
//             showError(programTypeInput, 'Please select a program type');
//             isValid = false;
//         } else {
//             clearError(programTypeInput);
//         }
        
//         // Validate experience
//         if (!experienceInput.value) {
//             showError(experienceInput, 'Please select your experience level');
//             isValid = false;
//         } else {
//             clearError(experienceInput);
//         }
        
//         // If all fields are valid, submit the form
//         if (isValid) {
//             // Show success message
//             const successMessage = document.querySelector('.success-message');
//             successMessage.classList.add('active');
            
//             // Reset form
//             form.reset();
            
//             // Update progress steps
//             progressSteps[1].classList.remove('active');
//             progressSteps[1].classList.add('completed');
//             progressSteps[2].classList.add('active');
//             progressSteps[2].classList.add('completed');
            
//             // Hide form
//             form.style.display = 'none';
            
//             // Scroll to success message
//             successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     });
    
//     // Helper functions
//     function showError(input, message) {
//         input.classList.add('error');
//         const errorElement = input.parentElement.querySelector('.error-message');
//         errorElement.textContent = message;
//     }
    
//     function clearError(input) {
//         input.classList.remove('error');
//         const errorElement = input.parentElement.querySelector('.error-message');
//         errorElement.textContent = '';
//     }
    
//     function isValidEmail(email) {
//         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }
    
//     function isValidPhone(phone) {
//         // Basic validation - can be enhanced for specific country formats
//         const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
//         return re.test(String(phone));
//     }
// }
