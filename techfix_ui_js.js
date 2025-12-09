// ================================
// TechFix Community - UI Module
// Handles navigation, theme, scroll effects
// ================================

export function initUI() {
    initTheme();
    initNavigation();
    initScrollEffects();
    initSmoothScroll();
    initRevealAnimations();
}

// ================================
// Theme Toggle
// ================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('techfix-theme') || 'dark';
    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(`theme-${savedTheme}`);
    themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    
    // Toggle theme
    themeToggle?.addEventListener('click', () => {
        const currentTheme = body.classList.contains('theme-light') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.classList.remove(`theme-${currentTheme}`);
        body.classList.add(`theme-${newTheme}`);
        themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
        localStorage.setItem('techfix-theme', newTheme);
    });
}

// ================================
// Navigation
// ================================
function initNavigation() {
    const nav = document.getElementById('nav');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileToggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks?.classList.remove('active');
            mobileToggle?.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav?.contains(e.target)) {
            navLinks?.classList.remove('active');
            mobileToggle?.classList.remove('active');
        }
    });
}

// ================================
// Scroll Effects
// ================================
function initScrollEffects() {
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class to nav
        if (currentScroll > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        lastScroll = currentScroll;
    });
}

// ================================
// Smooth Scroll
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================
// Reveal Animations on Scroll
// ================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for elements in the same container
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// ================================
// Back to Top Button (Optional)
// ================================
export function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top glass';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}