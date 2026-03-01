# Portfolio Website

A responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Project Overview

This project demonstrates a complete portfolio website implementation with semantic HTML structure, modern CSS styling, and JavaScript for interactive features. The website includes multiple sections showcasing personal information, projects, and contact details.

```
.
├── index.html          # Main HTML file with all sections
├── style.css           # CSS styling for the website
├── script.js           # JavaScript for interactive functionality
├── README.md           # Project documentation
```

## Implementation Details

### HTML Structure (index.html)

The HTML file includes the following semantic sections:

1.  **Header Section** - Contains name and tagline with navigation
2.  **Navigation Bar** - Sticky navigation with links to all sections
3.  **Hero Section** - Introduction with an interactive list for hobby benefits
4.  **About Section** - Personal bio and background information
5.  **Projects Section** - Grid layout showcasing project cards with links
6.  **Contact Section** - Contact form with interactive submission
7.  **Footer** - Social links, copyright information, and a dynamic date/time display

Key HTML features:

-   Semantic HTML5 elements (`header`, `nav`, `section`, `footer`)
-   Accessible form with proper labels and input types
-   Responsive meta viewport tag
-   External font imports (Inter and Poppins from Google Fonts)

### CSS Structure (style.css)

The CSS file provides styling for the entire website, including:

-   CSS custom properties and variables
-   Flexbox and Grid layouts
-   Gradient backgrounds
-   Responsive design with media queries
-   Sticky navigation
-   Card-based project layout
-   Form styling with focus states

### JavaScript Features (script.js)

The `script.js` file adds several interactive features to the website:

1.  **Interactive Hobby List**:
    *   Users can type a new hobby benefit into an input field.
    *   Clicking the "Add" button or pressing "Enter" dynamically adds the new benefit to the list.
    *   Each benefit in the list has a "Delete" button to remove it.

2.  **Contact Form Submission**:
    *   Prevents the default form submission behavior.
    *   When the user clicks "Submit," an alert message appears, confirming that the message has been sent successfully.
    *   The form is automatically cleared after submission.

3.  **Dynamic Date and Time in Footer**:
    *   The footer displays the current date and time.
    *   This information is updated every second to provide a live clock.

## How to Use

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Open `index.html` in your web browser:

    ```bash
    open index.html
    ```

3.  Or serve with a local server:
    ```bash
    npx serve .
    ```

## Branch Structure

This repository follows a structured branching workflow:

-   **`main`** - Production-ready code
-   **`stage`** - Pre-production testing
-   **`dev`** - Development and feature work

Workflow: `dev` → `stage` → `main`

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript (ES6)
-   Git & GitHub
-   GitHub CLI

## Browser Compatibility

-   Chrome/Edge (latest)
-   Firefox (latest)
-   Safari (latest)
-   Mobile browsers (iOS Safari, Chrome Mobile)
