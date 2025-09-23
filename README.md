# GraphMotion - Animated GitHub Contribution Calendar

GraphMotion is an interactive GitHub-style contribution calendar with beautiful animations. It features a responsive design with text fade-in effects and an animated contribution heatmap that responds to user interactions.

## 🎯 Overview

This project showcases a GitHub contribution calendar component that can be integrated into any website. It includes smooth text animations, interactive calendar grids, and a professional dark theme design. The calendar displays contribution data in a visual heatmap format with customizable animations and styling.

## 📁 Folder Structure

```
Graphmotion/
├── README.md                           # This documentation file
├── index.html                          # Main HTML file with the website content
├── favicon.ico                         # Website icon (16x16 pixels)
├── style.css                           # Main site stylesheet
├── contribution-calendar.js            # Core calendar component logic
├── contribution-calendar.css           # Calendar styling and animations
└── contribution-calendar-config.js     # Configuration file for calendar settings
```

## 🔧 File Descriptions

### Core Files

#### `index.html`
- **Purpose**: Main HTML file containing the entire website structure
- **Content**: 
  - HTML5 document structure with meta tags
  - Responsive viewport configuration
  - Links to all CSS and JavaScript resources
  - The main content with fade-in text animations
  - Contribution calendar integration
- **Key Features**:
  - Responsive design (mobile-first approach)
  - Dark theme with black background
  - Text fade-in animations using CSS keyframes
  - Integrated contribution calendar component
  - Independent calendar container for proper positioning

#### `contribution-calendar.js`
- **Purpose**: Core JavaScript logic for the contribution calendar component
- **Content**:
  - Calendar grid generation and rendering
  - Mock data generation for demo purposes
  - Interactive animations and hover effects
  - React-safe initialization for Next.js compatibility
  - Event handling for user interactions
- **Key Features**:
  - Vanilla JavaScript implementation
  - Compatible with React/Next.js environments
  - Automatic mock data generation
  - Smooth animations and transitions
  - Responsive grid layout

#### `contribution-calendar.css`
- **Purpose**: Complete styling for the contribution calendar component
- **Content**:
  - Calendar grid styling and layout
  - Color schemes for different activity levels
  - Animation keyframes and transitions
  - Responsive design breakpoints
  - Dark theme integration
- **Key Features**:
  - GitHub-style color palette
  - Smooth hover animations
  - Responsive design
  - Professional dark theme
  - Custom animation delays

#### `contribution-calendar-config.js`
- **Purpose**: Configuration settings for the contribution calendar
- **Content**:
  - GitHub API settings (username, token)
  - Calendar display options
  - Animation preferences
  - Mock data settings
- **Key Features**:
  - Easy customization
  - Mock data mode for demos
  - GitHub API integration ready

#### `favicon.ico`
- **Purpose**: Website icon displayed in browser tabs
- **Size**: 16x16 pixels
- **Format**: ICO format for maximum browser compatibility

### CSS Files

#### `style.css`
- **Purpose**: Main site stylesheet containing global styles (replaces previous built CSS path)
- **Content**:
  - Consolidated base styles and animation utilities
  - Responsive breakpoints (sm, md, xl)
  - Dark theme styling
  - Layout utilities used by `index.html`

### JavaScript Files

- The repository now ships only hand-authored JavaScript:
  - `contribution-calendar.js` (component logic)
  - `contribution-calendar-config.js` (settings)
  - No built chunk files are tracked.

### Font Files

- External fonts are now loaded at runtime via standard `<link>` to Google Fonts. No font files are tracked in the repository.

## 🎨 Design Features

### Visual Design
- **Color Scheme**: Dark theme with black background (#000000)
- **Typography**: Inter font family with multiple weights
- **Layout**: Flexbox-based responsive design with independent calendar container
- **Spacing**: Consistent padding and margins using Tailwind utilities

### Animations
- **Text Fade-in Effect**: Text elements fade in with blur and translateY effects
- **Calendar Animation**: Contribution calendar appears with delayed fade-in
- **Timing**: Staggered animations with custom delays between elements
- **Duration**: 0.7s animation duration with ease-in-out timing
- **Keyframes**: Custom CSS keyframes for smooth transitions

### Contribution Calendar Features
- **GitHub-style Heatmap**: Visual representation of activity levels
- **Interactive Grid**: Hover effects and click animations
- **Color Coding**: Different shades of green for activity intensity
- **Responsive Grid**: Adapts to different screen sizes
- **Mock Data**: Pre-generated sample data for demonstration

### Responsive Design
- **Mobile**: 350px width, centered text
- **Small screens (640px+)**: 600px width, left-aligned text
- **Medium screens (768px+)**: 800px width
- **Large screens (1280px+)**: Independent calendar container with proper centering

## 🚀 How to Run

1. **Local Development Server**:
   ```bash
   cd Graphmotion
   python3 -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Static File Serving**:
   - Open `index.html` directly in a web browser
   - Or serve using any static file server (nginx, Apache, etc.)

3. **GitHub Pages**:
   - Push to GitHub and enable GitHub Pages
   - Your site will be available at: `https://yourusername.github.io/GraphMotion`

## 🔧 Technical Details

### Dependencies
- **Vanilla JavaScript**: Pure JavaScript implementation for the calendar component
- **Tailwind CSS**: For utility-first styling and responsive design
- **Next.js**: For the main website framework
- **Inter Font**: For typography
- **GitHub API**: Ready for real contribution data integration

### Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support
- WOFF2 font format support
- JavaScript ES6+ features

### Performance
- **Code Splitting**: JavaScript is split into multiple chunks for better loading
- **Font Optimization**: WOFF2 format for faster font loading
- **CSS Optimization**: Minified and compressed stylesheets
- **Lazy Loading**: Scripts load asynchronously
- **React Compatibility**: Safe initialization for Next.js environments

## 📱 Features

### Interactive Elements
- **Contribution Calendar**: Interactive GitHub-style heatmap
- **Hover Effects**: Smooth animations on grid cell hover
- **Click Animations**: Responsive feedback on user interactions
- **Smooth Transitions**: All interactions have smooth animations

### Animation System
- **Text Fade-in**: Word-by-word text fade-in animations
- **Calendar Animation**: Delayed fade-in for the contribution calendar
- **Staggered Timing**: Custom animation delays for sequential appearance
- **Smooth Transitions**: Blur and translateY effects for professional feel

### Calendar Features
- **Mock Data Generation**: Automatic sample data for demonstration
- **GitHub API Ready**: Easy integration with real GitHub data
- **Responsive Grid**: Adapts to all screen sizes
- **Customizable Colors**: GitHub-style color palette
- **Activity Levels**: Multiple intensity levels with visual feedback

## 🎯 Use Cases

This project demonstrates:
- GitHub contribution calendar integration
- Vanilla JavaScript component development
- React/Next.js compatibility
- Responsive design implementation
- CSS animation techniques
- Static site deployment
- Professional web development practices

## 🔗 Integration

To use this contribution calendar in your own project:

1. **Copy the files**:
   - `contribution-calendar.js`
   - `contribution-calendar.css`
   - `contribution-calendar-config.js`

2. **Include in your HTML**:
   ```html
   <link rel="stylesheet" href="contribution-calendar.css">
   <div id="contribution-calendar"></div>
   <script src="contribution-calendar-config.js"></script>
   <script src="contribution-calendar.js"></script>
   ```

3. **Configure settings** in `contribution-calendar-config.js`

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

**Note**: This project showcases a professional GitHub contribution calendar component that can be easily integrated into any website or web application.

