// UI helpers for TechFix site

const THEME_KEY = "techfix-theme";

export function initThemeToggle() {
    const body = document.body;
    const toggle = document.querySelector(".theme-toggle");

    // initial theme
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light") {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
    } else {
        body.classList.add("theme-dark");
    }

    toggle?.addEventListener("click", () => {
        const isLight = body.classList.contains("theme-light");
        body.classList.toggle("theme-light", !isLight);
        body.classList.toggle("theme-dark", isLight);
        localStorage.setItem(THEME_KEY, isLight ? "dark" : "light");
    });
}

export function initNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle?.addEventListener("click", () => {
        navLinks?.classList.toggle("open");
    });

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            const target = href && document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                navLinks?.classList.remove("open");
            }
        });
    });

    // Footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

export function initScrollSpy() {
    const links = Array.from(document.querySelectorAll("[data-nav-link]"));
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (!("IntersectionObserver" in window)) return;

    const map = new Map();
    sections.forEach((section) => {
        const id = section.id;
        const link = links.find((l) => l.dataset.navLink === id);
        if (link) map.set(section, link);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = map.get(entry.target);
                if (!link) return;
                if (entry.isIntersecting) {
                    links.forEach((l) => l.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        },
        { threshold: 0.4 }
    );

    map.forEach((_link, section) => observer.observe(section));
}

export function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        const show = window.scrollY > 400;
        btn.classList.toggle("visible", show);
    });
}

export function initReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    revealEls.forEach((el) => observer.observe(el));
}
