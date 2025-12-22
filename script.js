// THEME TOGGLE
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    document.querySelector('.toggle-slider').textContent = newTheme === 'dark' ? '🌙' : '☀';
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelector('.toggle-slider').textContent = savedTheme === 'dark' ? '🌙' : '☀';
});

// TECH STACK DATA
const techStackData = [
    { icon: '⚛', name: 'React' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '🔷', name: 'TypeScript' },
    { icon: '⚡', name: 'Next.js' },
    { icon: '🎨', name: 'Tailwind CSS' },
    { icon: '🗄', name: 'MongoDB' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '☁', name: 'AWS' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '📦', name: 'Docker' },
    { icon: '⚙', name: 'Express.js' },
    { icon: '🌐', name: 'FastAPI' },
    { icon: '🎯', name: 'Django' },
];

// SKILLS DATA
const skillsData = {
    'Frontend & UI': ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'State Management (Redux)', 'AOS.js'],
    'Backend & APIs': ['Node.js', 'Express.js', 'Python', 'Flask', 'FastAPI', 'Django', 'RESTful APIs', 'Authentication/JWT', 'API Integration'],
    'Database & Storage': ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Database Design', 'SQL Queries'],
    'AI/ML & Data Science': ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'NLP/NLTK', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    'Cloud & DevOps': ['AWS (S3, EC2, SageMaker, Lambda)', 'Azure', 'Google Cloud', 'Docker', 'CI/CD', 'Git/GitHub', 'Deployment', 'Cloud Architecture'],
    'Developer Tools': ['VS Code', 'Postman', 'Git', 'Linux', 'Bash Scripting', 'Terminal'],
    'Embedded Systems': ['C', 'Embedded C', 'Arduino', 'STM32', 'UART/I2C/SPI'],
};

// LEARNING DATA
const learningData = [
    { title: 'Kubernetes & Microservices', description: 'Deep diving into container orchestration and microservice architecture.', progress: 60 },
    { title: 'GraphQL & Apollo', description: 'Mastering modern API development with GraphQL.', progress: 45 },
    { title: 'Advanced AWS Services', description: 'Exploring Lambda, ECS, and CloudFormation.', progress: 70 },
];

// PROJECTS DATA
const projectData = [
    {
        title: "GAVNN TECH – E-Commerce Desktop Application",
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Electron.js', 'AOS.js'],
        description: "Designed and developed a multi-page e-commerce frontend platform featuring animated landing pages, product listings, authentication screens, and a mock checkout flow. The application was packaged as a cross-platform desktop app using Electron, demonstrating strong UI design and frontend architecture skills.",
        metrics: [
            { value: '15+', label: 'Pages' },
            { value: '100%', label: 'Responsive UI' },
            { value: 'Electron', label: 'Desktop App' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV",
    },
    {
        title: "AgriVision AI – Plant Disease Detection System",
        tags: ['Python', 'Flask', 'TensorFlow', 'CNN', 'Machine Learning'],
        description: "Built a plant disease detection system using a custom Convolutional Neural Network (CNN). Implemented image preprocessing and model training pipelines, and deployed the model using a Flask-based web application for real-time leaf image upload and disease prediction.",
        metrics: [
            { value: 'CNN', label: 'Model Type' },
            { value: 'Image', label: 'Classification' },
            { value: 'Flask', label: 'Deployment' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV",
    },
    {
        title: "AI-Powered Food Delivery Chatbot",
        tags: ['Dialogflow', 'FastAPI', 'Python', 'MySQL', 'REST APIs'],
        description: "Developed an AI-driven food ordering chatbot using Google Dialogflow with multi-turn conversational flows. Built a FastAPI backend to manage users, menus, and orders, and integrated MySQL with RESTful APIs to enable end-to-end order processing.",
        metrics: [
            { value: 'Multi-turn', label: 'Dialog Flow' },
            { value: 'FastAPI', label: 'Backend' },
            { value: 'REST', label: 'APIs' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV",
    },
    {
        title: "CrashSense-Embedded: Dual-STM32 Accident Detection System",
        tags: ['Embedded C', 'STM32F401', 'UART', 'I2C', 'HC-05 Bluetooth', 'Interrupts', 'Embedded Systems'],
        description: "Implemented a real-time accident detection and emergency alert system using two STM32F401 microcontrollers. The master node simulates a car ECU detecting crashes via hardware interrupts, while the slave node acts as a cell-tower simulation that displays alerts on an I2C LCD and forwards messages via Bluetooth.",
        metrics: [
            { value: '2', label: 'STM32 MCUs' },
            { value: 'Interrupt', label: 'Driven Logic' },
            { value: 'UART + I2C', label: 'Communication' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV/AutoCrashRescue-Embedded",
    },
    {
        title: "DroneNav-Optimus: Optimized Drone Route Planning",
        tags: ['Python', 'A* Algorithm', 'QuadTree', 'Segment Tree', 'Min Heap', 'Design & Analysis of Algorithms'],
        description: "Designed an optimized drone route planning system using the A* pathfinding algorithm. Implemented QuadTree-based spatial indexing for static obstacles and Segment Trees for managing dynamic obstacles, enabling efficient and adaptive route computation.",
        metrics: [
            { value: 'A*', label: 'Pathfinding' },
            { value: 'QuadTree', label: 'Spatial Indexing' },
            { value: 'Segment Tree', label: 'Dynamic Obstacles' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV/DroneNav-Optimus",
    },
    {
        title: "CloudPilot: Automated DevOps Pipeline on AWS (Ongoing)",
        tags: ['AWS', 'DevOps', 'CI/CD', 'Docker', 'Infrastructure as Code', 'Cloud Architecture'],
        description: "CloudPilot is an ongoing DevOps project focused on designing and implementing an automated CI/CD pipeline on AWS. The project aims to apply DevOps best practices such as containerization, infrastructure as code, and cloud-native deployment workflows.",
        metrics: [
            { value: 'AWS', label: 'Cloud Platform' },
            { value: 'CI/CD', label: 'Automation Focus' },
            { value: 'Ongoing', label: 'Project Status' },
        ],
        liveLink: "#",
        githubLink: "https://github.com/VIJAYADITYARV/cloudpilot-Automated-DevOps-AWS",
    },
];

// TESTIMONIALS DATA
const testimonialsData = [
    { name: 'Dr. Rajesh Kumar', role: 'Professor, Amrita University', text: 'Vijay demonstrated exceptional problem-solving skills and deep understanding of full-stack development. His AgriVision AI project showcased technical prowess and practical application.', initial: 'RK' },
    { name: 'Priya Sharma', role: 'Project Collaborator', text: 'Working with Vijay was fantastic. His attention to detail and ability to implement complex NLU features made the project a huge success.', initial: 'PS' },
    { name: 'Academic Supervisor', role: 'Project Lead', text: 'Consistently delivers high-quality code with excellent documentation. Shows great initiative in learning new technologies and applying them effectively.', initial: 'AS' },
];

// RENDER TECH STACK (Only if element exists)
const techGrid = document.getElementById('techStackGrid');
if (techGrid) {
    techStackData.forEach(tech => {
        const div = document.createElement('div');
        div.className = 'tech-icon-card reveal';
        div.innerHTML = `<span class="tech-icon">${tech.icon}</span><span class="tech-name">${tech.name}</span>`;
        techGrid.appendChild(div);
    });
}

// RENDER SKILLS (Only if element exists)
const skillsContainer = document.getElementById('skillsContainer');
if (skillsContainer) {
    Object.keys(skillsData).forEach(category => {
        const section = document.createElement('div');
        section.className = 'skill-category reveal';
        section.innerHTML = `
            <h4 class="category-title">${category}</h4>
            <div class="skills-list">
                ${skillsData[category].map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(section);
    });
}

// RENDER LEARNING (Only if element exists)
const learningGrid = document.getElementById('learningGrid');
if (learningGrid) {
    learningData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'learning-card reveal';
        card.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${item.progress}%"></div>
            </div>
        `;
        learningGrid.appendChild(card);
    });
}

// RENDER PROJECTS (Only if element exists)
const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
    projectData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.innerHTML = `
            <div class="project-header">
                <h4>${project.title}</h4>
                <div class="tech-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-details">
                <p>${project.description}</p>
                <div class="project-metrics">
                    ${project.metrics.map(m => `
                        <div class="metric-item">
                            <span class="metric-value">${m.value}</span>
                            <span class="metric-label">${m.label}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}">Live Demo</a>
                    <a href="${project.githubLink}" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// RENDER TESTIMONIALS (Only if element exists)
const testimonialsGrid = document.getElementById('testimonialsGrid');
if (testimonialsGrid) {
    testimonialsData.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card reveal';
        card.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initial}</div>
                <div class="author-info">
                    <h5>${testimonial.name}</h5>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(card);
    });
}

// SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// SCROLL PROGRESS
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// BACK TO TOP
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// HEADER SCROLL
const header = document.querySelector('.main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// PARTICLES (Only if element exists)
function createParticles() {
    const container = document.getElementById('hero-particles');
    if (container) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(particle);
        }
    }
}
createParticles();

// EMAILJS INIT (Only on contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Initialize EmailJS
    (function () {
        emailjs.init("yU6lCa4oENcgFrKzi"); // Your Public Key
    })();

    // FORM SUBMISSION
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        emailjs.send("service_73parwk", "template_iei1tg1", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        })
        .then(() => {
            alert("Message sent successfully! I'll get back to you soon.");
            contactForm.reset();
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        })
        .finally(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
        });
    });
}

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}