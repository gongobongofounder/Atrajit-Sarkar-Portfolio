// Function to load text content from files
async function loadTextContent() {
    try {
        // Load hero section content
        const heroResponse = await fetch('data/hero.txt');
        const heroData = await heroResponse.text();
        const [name, title] = heroData.split('\n');
        document.getElementById('hero-name').textContent = name;
        document.getElementById('hero-title').textContent = title;

        // Load about section content
        const aboutResponse = await fetch('data/about.txt');
        const aboutContent = await aboutResponse.text();
        document.getElementById('about-content').innerHTML = aboutContent.replace(/\n/g, '<br>');

        // Load skills content
        const skillsResponse = await fetch('data/skills.txt');
        const skillsContent = await skillsResponse.text();
        document.getElementById('skills-content').innerHTML = skillsContent.replace(/\n/g, '<br>');

        // Load contact details
        const contactResponse = await fetch('data/contact.txt');
        const contactContent = await contactResponse.text();
        document.getElementById('contact-details').innerHTML = contactContent.replace(/\n/g, '<br>');

        // Load social links
        const socialResponse = await fetch('data/social.txt');
        const socialContent = await socialResponse.text();
        const socialLinks = socialContent.split('\n').filter(link => link.trim());
        const socialLinksContainer = document.getElementById('social-links');
        socialLinks.forEach(link => {
            const [platform, url] = link.split('|');
            const icon = getSocialIcon(platform.trim());
            const a = document.createElement('a');
            a.href = url.trim();
            a.target = '_blank';
            a.innerHTML = `<i class="${icon}"></i>`;
            socialLinksContainer.appendChild(a);
        });

        // Load footer text
        const footerResponse = await fetch('data/footer.txt');
        const footerText = await footerResponse.text();
        document.getElementById('footer-text').textContent = footerText;

    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Function to get social media icon class
function getSocialIcon(platform) {
    const icons = {
        'github': 'fab fa-github',
        'linkedin': 'fab fa-linkedin',
        'twitter': 'fab fa-twitter',
        'instagram': 'fab fa-instagram',
        'facebook': 'fab fa-facebook',
        'youtube': 'fab fa-youtube',
        'tiktok': 'fab fa-tiktok',
        'twitch': 'fab fa-twitch',
        'discord': 'fab fa-discord',
        'telegram': 'fab fa-telegram',
        'reddit': 'fab fa-reddit',
        'pinterest': 'fab fa-pinterest',
        'snapchat': 'fab fa-snapchat',
        'whatsapp': 'fab fa-whatsapp',
        'spotify': 'fab fa-spotify',
        'apple': 'fab fa-apple',
        'google': 'fab fa-google',
        'microsoft': 'fab fa-microsoft',
        'amazon': 'fab fa-amazon',
        'apple': 'fab fa-apple',
        
    };
    return icons[platform.toLowerCase()] || 'fas fa-link';
}

// Function to load and display blog posts
async function loadBlogs() {
    try {
        const blogsContainer = document.getElementById('blogs-container');
        const response = await fetch('blogs/index.html');
        const text = await response.text();
        
        // Extract the JSON data from the div
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const blogListDiv = doc.getElementById('blog-list');
        const blogs = JSON.parse(blogListDiv.textContent);

        blogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card fade-in';
            
            blogCard.innerHTML = `
                <div class="blog-content">
                    <h3>${blog.title}</h3>
                    <p class="blog-date">${blog.date}</p>
                    <p>Click to read the full blog post</p>
                    <a href="blogs/${blog.file}" class="btn primary" target="_blank">Read More</a>
                </div>
            `;
            
            blogsContainer.appendChild(blogCard);
        });
    } catch (error) {
        console.error('Error loading blogs:', error);
        const blogsContainer = document.getElementById('blogs-container');
        blogsContainer.innerHTML = '<p class="error-message">Failed to load blog posts. Please try again later.</p>';
    }
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Theme switching functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTextContent();
    loadBlogs();
    handleScrollAnimations();
    initTheme();
}); 