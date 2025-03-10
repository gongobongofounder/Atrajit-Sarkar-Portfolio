# Professional Portfolio Website Template

A modern, responsive portfolio website template that can be easily customized through text files. Perfect for hosting on GitHub Pages!

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast loading and smooth animations
- 📝 Easy content management through text files
- 📚 Automatic blog post loading from PDF files
- 🔗 Social media integration
- 🎯 SEO friendly

## Getting Started

1. Clone this repository
2. Replace the content in the `data` folder with your personal information:
   - `hero.txt`: Your name and title (one per line)
   - `about.txt`: Your personal description
   - `skills.txt`: Your skills and expertise
   - `contact.txt`: Your contact information
   - `social.txt`: Your social media links (format: platform|url)
   - `footer.txt`: Your footer text

3. Add your profile picture:
   - Place your profile picture in the `data` folder
   - Name it `profile.jpg`

4. Add your blog posts:
   - Create a `blogs` folder in the root directory
   - Add your PDF blog posts to this folder
   - The website will automatically display them with proper formatting

5. Deploy to GitHub Pages:
   - Push your repository to GitHub
   - Go to repository Settings > Pages
   - Select the main branch as the source
   - Your portfolio will be live at `https://yourusername.github.io/repository-name`

## Customization

### Colors
You can customize the website's color scheme by modifying the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### Layout
The layout can be modified by editing the CSS in `css/style.css`. The website uses CSS Grid and Flexbox for layout management.

### Animations
Scroll animations are handled by the `handleScrollAnimations()` function in `js/main.js`. You can modify the animation parameters or add new animations as needed.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 