# 🌟 Vijay Aditya R V - Portfolio

> A sleek, modern single-page portfolio showcasing my work in AI/ML, Cloud Computing, and Full-Stack Development.

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white" alt="GitHub Pages" />
</div>

---

## 🚀 Live Site

### 🔗 [vijayadityarv.github.io](https://VIJAYADITYARV.github.io)

---

## ✨ About This Portfolio

This is my professional portfolio website - a **single-page application** designed to provide a seamless, immersive browsing experience. It features smooth scrolling, dynamic animations, and a modern dark/light theme toggle.

### 🎯 Purpose

- **Professional Networking**: Share on LinkedIn, resume, and professional profiles
- **Project Showcase**: Highlight my technical projects and achievements
- **Easy Navigation**: One-page flow for quick profile overview
- **Modern Design**: Contemporary UI/UX with smooth animations

---

## 🎨 Features

### 🌟 Core Features
- ✅ **Single-Page Design**: Smooth scrolling navigation through all sections
- ✅ **Dark/Light Mode**: Toggle between themes with persistent preference
- ✅ **Fully Responsive**: Mobile-first design, works on all devices
- ✅ **Interactive Animations**: Scroll-based reveals, particle effects, hover states
- ✅ **Contact Form**: EmailJS integration for direct messaging
- ✅ **Fast Loading**: Vanilla JavaScript, no heavy frameworks (~2s load time)

### 📱 Sections
- 🏠 **Hero**: Introduction with professional title and quick links
- 👨‍💻 **About**: Professional summary, stats, and areas of interest
- 🛠️ **Tech Stack**: Technologies I work with (visual icons)
- 💪 **Skills**: Comprehensive technical skills breakdown
- 🎓 **Education**: Academic qualifications and certifications
- 🚀 **Projects**: 6 featured projects with live demos and GitHub links
- 💬 **Testimonials**: Professional reviews and GitHub activity
- 📧 **Contact**: Direct contact form with social links

---

## 🛠️ Tech Stack

### Built With
- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & Space Grotesk typography
- **EmailJS** - Contact form backend
- **GitHub Pages** - Free hosting

### Performance
- 🚄 **Lighthouse Score**: 95+ across all metrics
- ⚡ **Load Time**: < 2 seconds
- 📦 **Size**: < 500KB total
- 🎯 **No Dependencies**: Pure vanilla JavaScript

---

## 📂 Project Structure

```
VIJAYADITYARV.github.io/
├── index.html          # Main HTML file (all content)
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── profile.jpg         # Profile picture
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

**That's it!** Just 3 code files for a complete portfolio. Clean and simple. 🎯

---

## 🚀 Quick Start

### View Online
Simply visit: **[vijayadityarv.github.io](https://VIJAYADITYARV.github.io)**

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/VIJAYADITYARV/VIJAYADITYARV.github.io.git
   cd VIJAYADITYARV.github.io
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open index.html  # macOS
   start index.html # Windows
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Or use VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

---

## ⚙️ Configuration

### Update Personal Information

All content is in these files:

**1. index.html** - Update personal details:
```html
<!-- Hero Section -->
<h1>Your Name</h1>
<p class="bio-summary">Your bio...</p>

<!-- Update all links -->
<a href="YOUR_GITHUB_URL">GitHub</a>
<a href="YOUR_LINKEDIN_URL">LinkedIn</a>
```

**2. script.js** - Update data arrays:
```javascript
// Projects
const projectData = [
    {
        title: "Your Project",
        tags: ['Tech1', 'Tech2'],
        description: "Description...",
        // ...
    }
];

// Skills, tech stack, testimonials, etc.
```

**3. styles.css** - Customize theme:
```css
:root[data-theme="dark"] {
    --color-bg: #0a0a0f;
    --color-accent: #3b82f6;
    /* Your custom colors */
}
```

### Setup Contact Form (EmailJS)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create email service and template
3. Update in `script.js`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...});
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root[data-theme="dark"] {
    --color-accent: #3b82f6;        /* Main accent color */
    --color-gradient-1: #3b82f6;     /* Gradient start */
    --color-gradient-2: #8b5cf6;     /* Gradient middle */
    --color-gradient-3: #ec4899;     /* Gradient end */
}
```

### Add/Remove Sections
Simply edit `index.html` - add/remove `<section>` blocks.

### Change Fonts
Update Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## 📱 Responsive Design

Breakpoints:
- 📱 Mobile: < 480px
- 📱 Tablet: 481px - 968px
- 💻 Desktop: 969px+

All sections automatically adapt to screen size!

---

## 🔥 Why Single-Page?

### Advantages:
✅ **Better UX**: Smooth, continuous scrolling experience  
✅ **Faster Navigation**: No page reloads  
✅ **Modern**: Trendy, professional design  
✅ **Storytelling**: Natural flow through your profile  
✅ **Easier Sharing**: One URL for everything  

### Perfect For:
- LinkedIn profile links
- Resume/CV website field
- Professional networking
- Quick portfolio reviews
- Job applications

---

## 📊 Performance Metrics

```
Lighthouse Scores:
├── Performance:     95+ ⚡
├── Accessibility:   98+ ♿
├── Best Practices:  95+ ✅
└── SEO:            100 🔍

Load Time: < 2 seconds
Bundle Size: < 500KB
Mobile-Friendly: ✅
```

---

## 🌐 Deployment

Already deployed! This repository uses GitHub Pages with the special naming convention `username.github.io`.

### Automatic Updates:
Every push to `main` branch automatically updates the live site in ~1-2 minutes.

```bash
# Make changes
git add .
git commit -m "Updated projects section"
git push origin main

# Site updates automatically! 🎉
```

---

## 🔗 Related

📂 **Multi-Page Version**: [github.com/VIJAYADITYARV/portfolio](https://github.com/VIJAYADITYARV/portfolio)  
(Academic version with separate pages for faculty submission)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Feel free to fork and customize for your own portfolio!** 

Just remember to:
- ⭐ Star this repo if you find it useful
- 🔄 Update all personal information
- 📧 Configure your own EmailJS
- 🖼️ Replace the profile picture

---

## 👨‍💻 About Me

**Vijay Aditya R V**

Computer Science undergraduate specializing in:
- 🤖 AI/ML & Data Science
- ☁️ Cloud Computing (AWS Certified)
- 💻 Full-Stack Development (MERN Stack)
- 🔧 Systems Programming & Embedded Systems

### 📬 Connect With Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-vijayadityarv%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:vijayadityarv@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://in.linkedin.com/in/vijay-aditya-r-v)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/VIJAYADITYARV)
[![Resume](https://img.shields.io/badge/Resume-View%20PDF-green?style=for-the-badge&logo=adobe)](https://drive.google.com/file/d/1psRnezARcynav-tT-mXkNaRBN_8jjrmR/view?usp=sharing)

</div>

---

## 🙏 Acknowledgments

- **Font Awesome** - Beautiful icons
- **Google Fonts** - Clean typography
- **EmailJS** - Contact form functionality
- **GitHub Pages** - Free, reliable hosting

---

## 📈 Stats

![Profile Views](https://komarev.com/ghpvc/?username=VIJAYADITYARV&color=brightgreen&style=for-the-badge)
![GitHub Stars](https://img.shields.io/github/stars/VIJAYADITYARV?style=for-the-badge&logo=github)
![Last Commit](https://img.shields.io/github/last-commit/VIJAYADITYARV/VIJAYADITYARV.github.io?style=for-the-badge&logo=github)

---

<div align="center">

### ⭐ Star this repo if you like it!

**Built with ❤️ and ☕ by Vijay Aditya R V**

[🔝 Back to Top](#-vijay-aditya-r-v---portfolio)

</div>
