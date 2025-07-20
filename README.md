# Sophia Soares Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a component-based architecture with multilingual support (English, German, and Brazilian Portuguese).

## 🚀 Features

- **Component-Based Architecture**: Each section is a separate component with its own HTML, CSS, and JS files
- **Multilingual Support**: English, German, and Brazilian Portuguese
- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Smooth scroll animations, hover effects, and transitions
- **Bootstrap 5**: For responsive layout and components
- **FontAwesome Icons**: Free icons for commercial use
- **Custom Design System**: CSS variables for consistent styling

## 📁 Project Structure

```
sophia_soares/
├── index.html                          # Main entry point
├── styles/
│   └── global.css                      # Global CSS variables and base styles
├── components/
│   ├── navigation/
│   │   ├── navigation.html             # Navigation bar with language switcher
│   │   ├── navigation.css              # Navigation styles
│   │   └── navigation.js               # Navigation logic and smooth scrolling
│   ├── hero/
│   │   ├── hero.html                   # Hero section with animated title
│   │   ├── hero.css                    # Hero styles and animations
│   │   └── hero.js                     # Hero animations and typing effect
│   ├── about/
│   │   ├── about.html                  # About section with personal info
│   │   ├── about.css                   # About styles and image effects
│   │   └── about.js                    # About animations and counters
│   ├── skills/
│   │   ├── skills.html                 # Skills section with progress bars
│   │   ├── skills.css                  # Skills styles and animations
│   │   └── skills.js                   # Skills animations and progress bars
│   ├── education-career/
│   │   ├── education-career.html       # Education and career timeline
│   │   ├── education-career.css        # Timeline styles and animations
│   │   └── education-career.js         # Timeline scroll animations
│   ├── projects/
│   │   ├── projects.html               # Featured projects with cards
│   │   ├── projects.css                # Project card styles and effects
│   │   └── projects.js                 # Project animations and interactions
│   ├── languages/
│   │   ├── languages.html              # Language proficiency section
│   │   ├── languages.css               # Language card styles and progress bars
│   │   └── languages.js                # Progress bar animations
│   ├── contact/
│   │   ├── contact.html                # Contact form section
│   │   ├── contact.css                 # Form styles and validation
│   │   └── contact.js                  # Form handling and notifications
│   └── outside-work/
│       ├── outside-work.html           # Hobbies and interests section
│       ├── outside-work.css            # Hobby card styles and effects
│       └── outside-work.js             # Hobby animations
└── js/
    └── app.js                          # Main application logic
```

## 🎨 Design System

### Colors
- **Primary**: Lavender (`#8B5CF6`)
- **Secondary**: Green (`#10B981`)
- **White**: `#FFFFFF`
- **Light Gray**: `#F3F4F6`
- **Gray**: `#6B7280`
- **Dark Gray**: `#1F2937`

### Typography
- **Headings**: Montserrat (300, 400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600)

### Spacing
- **Small**: `0.5rem`
- **Medium**: `1rem`
- **Large**: `1.5rem`
- **Extra Large**: `2rem`

### Border Radius
- **Small**: `0.25rem`
- **Medium**: `0.5rem`
- **Large**: `1rem`

### Shadows
- **Small**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 15px rgba(0, 0, 0, 0.1)`
- **Extra Large**: `0 20px 25px rgba(0, 0, 0, 0.1)`

## 🌐 Multilingual Support

The portfolio supports three languages:
- **English (EN)**: Default language
- **German (DE)**: German translations
- **Brazilian Portuguese (PT)**: Portuguese translations

### Language Switching
- Language switcher in the navigation bar
- All text content has data attributes for translations
- Automatic language updates throughout the site

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎭 Animations & Effects

### Scroll Animations
- Fade-in effects on scroll
- Intersection Observer API for performance
- Smooth transitions between sections

### Hover Effects
- Card lift effects
- Icon scaling and rotation
- Color transitions
- Shadow enhancements

### Special Effects
- Typing animation in hero section
- Floating icons with parallax
- Progress bar animations with shimmer
- Timeline animations
- Form validation feedback

## 🛠️ Components Overview

### Navigation Component
- Fixed top navigation
- Smooth scrolling to sections
- Language switcher
- Mobile-responsive hamburger menu
- Active link highlighting

### Hero Component
- Animated title with typing effect
- Floating icons with parallax
- Call-to-action buttons
- Responsive layout

### About Component
- Personal information section
- Animated statistics counters
- Image placeholder with effects
- Scroll-triggered animations

### Skills Component
- Categorized skill bars (Frontend, Backend, Tools)
- Animated progress bars with shimmer
- Hover effects on skill items
- Responsive grid layout

### Education & Career Component
- Timeline layout for education and career
- Animated timeline with icons
- Hover effects on timeline items
- Side-by-side layout

### Projects Component
- Project cards with images
- Technology tags
- Live demo and code links
- Hover animations and effects

### Languages Component
- Language proficiency cards
- Animated progress bars
- Shimmer effect on progress bars
- Responsive grid layout

### Contact Component
- Contact form with validation
- Success/error notifications
- Form submission handling
- Responsive design

### Outside Work Component
- Hobby and interest cards
- Icon animations
- Hover effects
- Personal touch section

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **For local development**, use a local server to avoid CORS issues:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🔧 Customization

### Adding New Components
1. Create a new folder in `components/`
2. Add `component-name.html`, `component-name.css`, and `component-name.js`
3. Update `index.html` to include the component placeholder and CSS/JS links
4. Update `js/app.js` to load and initialize the new component

### Modifying Colors
Update CSS variables in `styles/global.css`:
```css
:root {
    --primary-color: #8B5CF6;    /* Lavender */
    --secondary-color: #10B981;  /* Green */
    /* ... other variables */
}
```

### Adding Languages
1. Add new language data attributes to HTML elements
2. Update translations in `js/app.js`
3. Add language button to navigation

## 📝 Maintenance

### File Organization
- Each component is self-contained
- Global styles are in `styles/global.css`
- Component-specific styles are in their respective CSS files
- JavaScript is modular and component-based

### Best Practices
- Use CSS variables for consistent styling
- Keep components independent
- Test on multiple devices and browsers
- Optimize images and assets
- Maintain semantic HTML structure

## 🎯 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project uses free resources:
- **Bootstrap 5**: MIT License
- **FontAwesome**: Free for commercial use
- **Google Fonts**: Free for commercial use

## 🤝 Contributing

Feel free to suggest improvements or report issues. The component-based architecture makes it easy to modify individual sections without affecting others.

---

**Built with ❤️ using modern web technologies** 