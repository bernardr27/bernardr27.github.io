// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            navLinks?.classList.remove("open");
        }
    });
});

// Contact form: copy message and open mail client
const submitBtn = document.getElementById("contact-submit");

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        const name = document.getElementById("name")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const service = document.getElementById("service")?.value || "";
        const budget = document.getElementById("budget")?.value || "";
        const details = document.getElementById("details")?.value || "";

        const lines = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Service Type: ${service}`,
            budget ? `Budget: ${budget}` : "",
            "",
            "Project Details:",
            details || "",
        ].filter(Boolean);

        const message = lines.join("\n");
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(message).catch(() => {});
        }

        const targetEmail = "yourname@example.com"; // UPDATE THIS
        const subject = encodeURIComponent("New TechFix / Website / Branding Request");
        const body = encodeURIComponent(message);

        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Scroll reveal
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
