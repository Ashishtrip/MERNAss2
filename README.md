# Portfolio Website

A responsive personal portfolio website built with HTML and CSS.

## Project Overview

This project demonstrates a complete portfolio website implementation with semantic HTML structure and modern CSS styling. The website includes multiple sections showcasing personal information, projects, and contact details.

```
.
├── index.html          # Main HTML file with all sections
├── style.css           # CSS styling (modified version without color, padding, font-size, font-weight)
├── README.md           # Project documentation
```

## Implementation Details

### HTML Structure (index.html)

The HTML file includes the following semantic sections:

1. **Header Section** - Contains name and tagline with navigation
2. **Navigation Bar** - Sticky navigation with links to all sections
3. **Hero Section** - Introduction with hobby description and benefits list
4. **About Section** - Personal bio and background information
5. **Projects Section** - Grid layout showcasing project cards with links
6. **Contact Section** - Contact form with name, email, and message fields
7. **Footer** - Social links and copyright information

Key HTML features:

- Semantic HTML5 elements (`header`, `nav`, `section`, `footer`)
- Accessible form with proper labels and input types
- Responsive meta viewport tag
- External font imports (Inter and Poppins from Google Fonts)

### CSS Structure (style.css)

The CSS file has been modified to remove all:

- **Color properties** (text colors, background colors)
- **Padding properties** (spacing)
- **Font-size properties** (text sizing)
- **Font-weight properties** (text boldness)

#### Original CSS Features (before modification):

- CSS custom properties and variables
- Flexbox and Grid layouts
- Gradient backgrounds
- Responsive design with media queries
- Sticky navigation
- Card-based project layout
- Form styling with focus states

#### Modified CSS Features:

- Layout structure preserved (display, margin, max-width, grid, flex)
- Border radius maintained for visual structure
- Box shadows preserved for depth
- Responsive breakpoints maintained
- Font families preserved (Inter, Poppins)

## How to Use

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open `index.html` in your web browser:

   ```bash
   open index.html
   ```

3. Or serve with a local server:
   ```bash
   npx serve .
   ```

## Branch Structure

This repository follows a structured branching workflow:

hei??, konsi branch? padhai tune???
college puch rha h kya

Workflow: `dev` → `stage` → `main`

## Technologies Used

- HTML5
- CSS3
- Git & GitHub
- GitHub CLI

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
