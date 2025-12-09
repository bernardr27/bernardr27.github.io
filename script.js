import { initThemeToggle, initNav, initScrollSpy, initBackToTop, initReveal } from "./ui.js";
import { initPlugins } from "./plugins.js";

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initNav();
    initScrollSpy();
    initBackToTop();
    initReveal();
    initPlugins();
});
