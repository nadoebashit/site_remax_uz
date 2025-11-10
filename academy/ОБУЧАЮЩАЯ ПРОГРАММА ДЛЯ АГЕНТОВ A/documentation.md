# REMAX Academy Lecture List - Documentation

## Overview
This documentation provides information about the modern, sleek design implementation for the REMAX Academy lecture list. The design features a responsive layout with collapsible modules, sidebar navigation, and REMAX branding elements.

## Files Structure
- `index.html` - Main HTML file
- `styles.css` - CSS styling
- `script.js` - JavaScript functionality
- `images/` - Directory containing REMAX branding images

## Features
1. **Modern Design**: Clean, card-based layout with REMAX branding colors
2. **Collapsible Modules**: Click on module headers to expand/collapse content
3. **Sidebar Navigation**: Quick access to all modules
4. **Responsive Layout**: Works on desktop, tablet, and mobile devices
5. **Interactive Elements**: Smooth animations and hover effects
6. **Back to Top Button**: Easy navigation for long content

## REMAX Branding
- Uses official REMAX colors:
  - Red: #e61a1a
  - Blue: #0054a4
  - Cream: #f7f3e9
  - Dark: #1a1a1a
- Incorporates REMAX logos and balloon mark

## Technical Implementation
- **HTML5** semantic structure
- **CSS3** with flexbox layout and media queries for responsiveness
- **JavaScript** for interactive elements and dynamic content loading
- Cross-browser compatibility fixes
- Performance optimizations

## Responsive Breakpoints
- Desktop: 1025px and above
- Tablet: 768px to 1024px
- Mobile: 767px and below

## How to Use
1. **View Modules**: Click on module headers to expand/collapse content
2. **Navigate**: Use the sidebar to quickly jump to specific modules
3. **Mobile View**: On smaller screens, the sidebar appears above the content

## Customization Options
- **Colors**: Edit CSS variables in the `:root` section of styles.css
- **Content**: Modify the modules data in script.js to update lecture content
- **Images**: Replace images in the images/ directory (maintain same filenames)

## Browser Compatibility
Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Performance Considerations
- Images use lazy loading
- DOM manipulation optimized with document fragments
- Scroll event listener is throttled for better performance
- JSON data is inlined to avoid extra HTTP requests

## Future Enhancements
- Progress tracking for completed lectures
- Search functionality
- User accounts and personalization
- Interactive quizzes and assessments

## Support
For any questions or issues, please contact the REMAX Academy team.
