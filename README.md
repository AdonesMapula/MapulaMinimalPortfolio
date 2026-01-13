# FortFolio - Minimalist Portfolio Website

A clean, minimalist black & white personal portfolio website built with React JS and Tailwind CSS.

## Features

- ✨ Minimalist black & white design
- 🌗 Light/Dark mode toggle with localStorage persistence
- 📱 Fully responsive (mobile-first)
- 🖨️ Print-optimized Resume and Cover Letter sections
- 🎨 Typography-focused, distraction-free UI
- ⚡ Built with Vite for fast development

## Tech Stack

- React JS
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── ThemeToggle.jsx
 │   ├── ProjectCard.jsx
 │   ├── PrintButton.jsx
 │   └── Footer.jsx
 ├── sections/
 │   ├── Hero.jsx
 │   ├── About.jsx
 │   ├── Skills.jsx
 │   ├── Projects.jsx
 │   ├── Resume.jsx
 │   └── CoverLetter.jsx
 ├── context/
 │   └── ThemeContext.jsx
 ├── data/
 │   ├── skills.js
 │   └── projects.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Customization

### Personal Information

Update the following files with your information:
- `src/sections/Hero.jsx` - Name and subtitle
- `src/sections/About.jsx` - Bio and personal details
- `src/sections/Resume.jsx` - Resume content
- `src/sections/CoverLetter.jsx` - Cover letter content

### Skills

Edit `src/data/skills.js` to update your skills list.

### Projects

Edit `src/data/projects.js` to add or modify your projects.

## Print Functionality

The Resume and Cover Letter sections are optimized for printing:
- Use the "Print Resume" or "Print Cover Letter" buttons
- Navigation and theme toggle are automatically hidden during print
- Print styles ensure black text on white background

## License

This project is open source and available for personal use.

