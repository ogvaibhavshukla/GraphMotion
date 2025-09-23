// 🎨 Animated GitHub Contribution Calendar - Default Configuration
// This file contains default settings for the contribution calendar component

window.ContributionCalendarConfig = {
    // 🎯 Default GitHub username (users should override this)
    GITHUB_USERNAME: 'demo-user',
    
    // 🔑 GitHub Personal Access Token (users must provide their own)
    GITHUB_TOKEN: '', // Using mock data for demo
    
    // 🎨 Default theme ('light' or 'dark')
    DEFAULT_THEME: 'dark',
    
    // ⚡ Animation settings
    ANIMATION_SPEED: 150, // milliseconds between frames
    MAX_GENERATIONS: 500, // maximum animation cycles
    
    // 📏 Grid settings
    GRID_ROWS: 7,
    GRID_COLS: 53, // Full year + 1 extra week
    SQUARE_SIZE: 14, // pixels
    GAP_SIZE: 3,     // pixels
    
    // 📅 Default date range (current year)
    START_DATE: new Date(new Date().getFullYear(), 0, 1), // January 1st of current year
    END_DATE: new Date(new Date().getFullYear(), 11, 31)  // December 31st of current year
};