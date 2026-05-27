/**
 * Personal Portfolio Website - JavaScript
 * Author: Anucha Taprajit
 * Description: Interactive features for portfolio website
 */

// ==================== DOM Elements ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailText = document.getElementById('email-text');
const sections = document.querySelectorAll('section[id]');

// ==================== Mobile Menu Toggle ====================
/**
 * Toggle mobile navigation menu
 * - Shows/hides the menu on mobile devices
 * - Toggles the hamburger animation
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Event listener for mobile menu button
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==================== Smooth Scroll ====================
/**
 * Smooth scroll to section when clicking nav links
 * - Prevents default anchor behavior
 * - Scrolls smoothly to the target section
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scroll for all anchor links (buttons, etc.)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#" or already handled by nav links
        if (targetId === '#' || this.classList.contains('nav-link')) {
            return;
        }
        
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Active Menu Highlight ====================
/**
 * Highlight active menu item based on scroll position
 * - Updates active class on nav links as user scrolls
 * - Shows which section is currently in view
 */
function highlightActiveSection() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ==================== Back to Top Button ====================
/**
 * Show/hide back to top button based on scroll position
 * - Button appears after scrolling down 300px
 * - Smoothly scrolls to top when clicked
 */
function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Scroll to top when button is clicked
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== Navbar Scroll Effect ====================
/**
 * Add shadow to navbar on scroll
 * - Makes navbar more prominent when scrolling
 */
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
}

// ==================== Copy Email Function ====================
/**
 * Copy email address to clipboard
 * - Shows feedback when email is copied
 * - Uses modern Clipboard API with fallback
 */
if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener('click', async () => {
        const email = emailText.textContent;
        
        try {
            // Try using the modern Clipboard API
            await navigator.clipboard.writeText(email);
            showCopyFeedback('Copied!');
        } catch (err) {
            // Fallback for older browsers
            fallbackCopyToClipboard(email);
        }
    });
}

/**
 * Fallback copy function for browsers without Clipboard API
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback('Copied!');
    } catch (err) {
        showCopyFeedback('Failed to copy');
    }
    
    document.body.removeChild(textArea);
}

/**
 * Show visual feedback when email is copied
 */
function showCopyFeedback(message) {
    const originalText = copyEmailBtn.textContent;
    copyEmailBtn.textContent = message;
    copyEmailBtn.style.backgroundColor = '#10b981';
    copyEmailBtn.style.borderColor = '#10b981';
    
    setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.backgroundColor = '';
        copyEmailBtn.style.borderColor = '';
    }, 2000);
}

// ==================== Scroll Event Listeners ====================
/**
 * Combined scroll event handler
 * - Optimized with requestAnimationFrame for better performance
 */
let ticking = false;

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            highlightActiveSection();
            toggleBackToTopButton();
            handleNavbarScroll();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', handleScroll);

// ==================== Initialize ====================
/**
 * Initialize all functions on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Run initial checks
    highlightActiveSection();
    toggleBackToTopButton();
    handleNavbarScroll();
    
    // Add fade-in animation to sections on load
    animateSectionsOnLoad();
});

/**
 * Simple fade-in animation for sections
 */
function animateSectionsOnLoad() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply initial styles and observe all cards
    const animatedElements = document.querySelectorAll(
        '.career-card, .skill-card, .project-card, .contact-card, .checklist-item, .info-item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
}

// ==================== Keyboard Navigation ====================
/**
 * Handle keyboard navigation for accessibility
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==================== Console Welcome Message ====================
console.log('%c Welcome to my portfolio! 👋', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%c Built with HTML, CSS, and JavaScript', 'color: #6b7280; font-size: 12px;');
console.log('%c - Anucha Taprajit', 'color: #10b981; font-size: 12px;');
