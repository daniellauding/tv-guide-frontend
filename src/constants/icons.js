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
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
    </svg>`,
    cog: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    more: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>`,
    dark: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`,
};

// Add size mappings
const ICON_SIZES = {
    'icon-sm': 'w-3.5 h-3.5',
    'icon-md': 'w-5 h-5',
    'icon-lg': 'w-6 h-6'
};

// Update createIcon function to handle size classes
function createIcon(name, customSize = 'w-6 h-6') {
    const icon = ICONS[name];
    if (!icon) return '';
    
    // If it's already an SVG string, just return it
    if (typeof icon === 'string') {
        if (customSize) {
            // Replace the size class
            return icon.replace(/class="([^"]*)"/, (match, p1) => {
                // Remove any existing width/height classes
                const cleanedClass = p1.replace(/w-\d+(\.\d+)?|h-\d+(\.\d+)?/g, '').trim();
                // Add the custom size
                return `class="${cleanedClass} ${customSize}"`;
            });
        }
        return icon;
    }
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

// Make createIcon available globally
window.createIcon = createIcon; 