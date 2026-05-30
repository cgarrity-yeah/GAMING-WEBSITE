# GameHub - Your Ultimate Gaming Destination

A modern, responsive gaming website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Sleek dark theme with neon cyan accents
- Smooth animations and transitions
- Professional gradient backgrounds

🎮 **Game Library**
- Display featured games with descriptions
- Click on games to learn more details
- Interactive modal popup for game information

📱 **Fully Responsive**
- Works perfectly on desktop, tablet, and mobile
- Hamburger menu for mobile devices
- Adaptive grid layout

🔧 **Interactive Features**
- Smooth scrolling navigation
- Contact form
- Mobile-friendly hamburger menu
- Hover effects and animations

## File Structure

```
gaming-website/
├── index.html      # Main HTML file with page structure
├── styles.css      # Complete styling and responsive design
├── script.js       # Interactive functionality and game data
└── README.md       # This file
```

## How to Use

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### With GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/gaming-website`

## Customization

### Adding More Games
Edit the `games` array in `script.js`:

```javascript
const games = [
    {
        id: 7,
        title: 'Your Game Title',
        genre: 'Your Genre',
        emoji: '🎯',
        description: 'Your game description here.'
    }
];
```

### Changing Colors
Edit the CSS variables in `styles.css`:
- Primary color: `#00d4ff` (cyan)
- Background: `#0a0e27` (dark blue)
- Secondary background: `#1a1a2e`

### Updating Content
- **Logo**: Change "GameHub" text in `index.html`
- **Navigation**: Add/remove links in the `<nav>` section
- **Hero Section**: Update title and description
- **Contact Info**: Add your email or contact details

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Interactive features and dynamic content
- **No frameworks or dependencies** - Pure vanilla code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Consider adding:
- Database integration for dynamic game data
- User authentication and profiles
- Game reviews and ratings
- Multiplayer functionality
- API integration
- Payment processing
- Social media sharing

## License

Free to use and modify for personal and commercial projects.

## Support

For questions or issues, feel free to create an issue in the GitHub repository.

---

**Happy Gaming! 🎮**
