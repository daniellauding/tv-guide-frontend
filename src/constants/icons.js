const ICONS = {
    search: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>`,
    close: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>`,
    time: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    clock: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    hamburger: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>`,
    dark: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`,
    menu: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>`,
    'chevron-left': `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>`,
    'chevron-right': `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>`,
    calendar: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`,
};

// Size mappings - merged from both files
const SIZES = {
    xs: 'w-3 h-3',
    s: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
};

// Add size mappings for class-based approach
const ICON_SIZES = {
    'icon-sm': 'w-3.5 h-3.5',
    'icon-md': 'w-5 h-5',
    'icon-lg': 'w-6 h-6'
};

// Enhanced createIcon function that supports both approaches
function createIcon(name, customSize = 'w-6 h-6', className = '') {
    const icon = ICONS[name];
    if (!icon) return '';
    
    // If it's already an SVG string, just return it with size adjustments
    if (typeof icon === 'string') {
        if (customSize) {
            // Replace the size class
            return icon.replace(/class="([^"]*)"/, (match, p1) => {
                // Remove any existing width/height classes
                const cleanedClass = p1.replace(/w-\d+(\.\d+)?|h-\d+(\.\d+)?/g, '').trim();
                // Add the custom size and any additional classes
                const finalClass = `${cleanedClass} ${customSize} ${className}`.trim();
                return `class="${finalClass}"`;
            });
        }
        return icon;
    }
}

// Legacy getIcon function for backward compatibility
function getIcon(name, size = 'md', className = '') {
    // If the icon exists in our consolidated system, use createIcon
    if (ICONS[name]) {
        const sizeClass = SIZES[size] || SIZES.md;
        return createIcon(name, sizeClass, className);
    }
    return '';
}

// Update initializeIcons function
function initializeIcons() {
    document.querySelectorAll('[class*="icon-"]').forEach(element => {
        const iconName = Array.from(element.classList)
            .find(cls => cls.startsWith('icon-'))
            ?.replace('icon-', '');
            
        if (iconName && ICONS[iconName]) {
            // Get the SVG string
            let iconSvg = ICONS[iconName];
            
            // Replace the size class to ensure it's w-6 h-6
            iconSvg = iconSvg.replace(/class="([^"]*)"/, (match, p1) => {
                // Remove any existing width/height classes
                const cleanedClass = p1.replace(/w-\d+(\.\d+)?|h-\d+(\.\d+)?/g, '').trim();
                // Add w-6 h-6
                return `class="${cleanedClass} w-6 h-6"`;
            });
            
            element.innerHTML = iconSvg;
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeIcons);
} else {
    initializeIcons();
}

// Make both functions available globally for backward compatibility
window.createIcon = createIcon;
window.getIcon = getIcon; 