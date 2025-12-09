# TechFix Community - Premium Website

A modern, premium website with glassmorphism design, particle effects, and advanced animations. Built with pure HTML, CSS, and JavaScript.

## 🎨 Features

### Design
- **Glassmorphism UI** - Apple-inspired frosted glass effects
- **Dynamic Particle Background** - Interactive animated particles
- **Dark/Light Theme** - Seamless theme switching with localStorage
- **Gradient Accents** - Vibrant neon green and blue gradients
- **Smooth Animations** - Scroll-triggered reveals and hover effects

### Functionality
- ✨ Animated particle background with mouse interaction
- 🎯 Smooth scroll navigation
- 📱 Fully responsive design
- 🌓 Theme persistence across sessions
- 💫 Parallax effects
- 🔢 Counter animations
- 📧 Contact form handling
- 🎨 Advanced card hover effects
- 🖱️ Custom cursor (desktop only)

## 📁 File Structure

```
bernardr27.github.io/
├── index.html          # Main HTML structure
├── style.css           # Complete styling with glassmorphism
├── script.js           # Main JavaScript entry point
├── ui.js              # UI interactions (nav, theme, scroll)
├── animations.js       # Advanced animations and effects
├── particles.js        # Particle background system
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Go to your repository: `https://github.com/bernardr27/bernardr27.github.io`
2. Click **Add file → Upload files**
3. Upload ALL these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `ui.js`
   - `animations.js`
   - `particles.js`
   - `README.md`
4. Commit with message: "Deploy enhanced TechFix website"
5. Go to **Settings → Pages**
6. Ensure Source is set to: **Deploy from branch: main, / (root)**
7. Visit `https://bernardr27.github.io` after 1-2 minutes

### Option 2: Local Development

1. Create a new folder on your computer
2. Save all files in that folder
3. Open `index.html` in a modern browser
4. Use VS Code Live Server for best results

## 🎨 Customization Guide

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --accent-primary: #00ff88;      /* Change primary color */
    --accent-secondary: #0ea5e9;    /* Change secondary color */
    --accent-tertiary: #8b5cf6;     /* Change tertiary color */
}
```

### Content

1. **Hero Section** - Edit text in `index.html` around line 100
2. **Services** - Update service cards around line 200
3. **Portfolio** - Modify portfolio items around line 300
4. **Pricing** - Change pricing tiers around line 400
5. **Contact Info** - Update email and location around line 600

### Particle Effects

Choose between two styles in `particles.js`:
- **Default**: Connected particles with mouse interaction
- **Stars**: Twinkling star effect (uncomment `initStarsEffect()` in `script.js`)

## 🔧 Advanced Modifications

### Adding New Sections

1. Add HTML section in `index.html`:
```html
<section class="section" id="new-section">
    <div class="section-header reveal">
        <h2>New Section</h2>
    </div>
    <!-- Your content -->
</section>
```

2. Add nav link:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Disabling Features

In `script.js`, comment out any feature you don't want:

```javascript
// initParticles();  // Disable particles
// initAnimations(); // Disable advanced animations
```

### Contact Form Integration

Replace the form handler in `script.js` with your backend:

```javascript
// Use Formspree
form.action = "https://formspree.io/f/YOUR_FORM_ID";

// Or use EmailJS
// See: https://www.emailjs.com/docs/
```

## 📱 Browser Support

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Reduce Particles**: Lower particle count in `particles.js` line 45
2. **Disable Animations**: Comment out `initCursorEffect()` on mobile
3. **Optimize Images**: If you add images, use WebP format
4. **Lazy Loading**: Add `loading="lazy"` to images

## 🎯 SEO Optimization

1. Update `<title>` and `<meta description>` in `index.html`
2. Add relevant keywords in content
3. Create a `sitemap.xml`
4. Add Google Analytics (optional)

## 🐛 Troubleshooting

### Particles not showing
- Check browser console for errors
- Ensure `particles.js` is loaded
- Verify canvas element exists in HTML

### Theme not persisting
- Check browser localStorage is enabled
- Clear cache and reload

### Animations not working
- Disable browser's "Reduce motion" setting
- Check if JavaScript is enabled

### Mobile menu not opening
- Verify `ui.js` is loaded
- Check for JavaScript errors in console

## 📝 License

This project is free to use for personal and commercial projects.

## 🤝 Support

For issues or questions:
1. Check this README first
2. Open an issue on GitHub
3. Email: hello@techfix.com (update this!)

## 🚀 Future Enhancements

Potential features to add:
- [ ] Blog section with CMS
- [ ] Real-time chat widget
- [ ] Service booking system
- [ ] Customer dashboard
- [ ] Photo gallery lightbox
- [ ] Testimonial carousel
- [ ] Newsletter signup
- [ ] Multi-language support

## 🎨 Design Credits

Inspired by:
- Apple's glassmorphism design
- Stripe's modern UI
- Webflow's premium templates

---

Built with ❤️ for TechFix Community | Houston, TX