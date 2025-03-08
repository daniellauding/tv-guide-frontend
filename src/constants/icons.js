const ICONS = {
    search: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>`,
    close: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>`,
    time: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    clock: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    hamburger: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
    </svg>`,
    cog: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    more: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>`
};

// Add size mappings
const ICON_SIZES = {
    'icon-sm': 'w-3.5 h-3.5',
    'icon-md': 'w-5 h-5',
    'icon-lg': 'w-6 h-6'
};

// Update createIcon function to handle size classes
function createIcon(name, customSize = '') {
    const icon = ICONS[name];
    if (!icon) return '';
    
    // Get the parent element's size class
    const sizeClass = customSize || 'w-5 h-5'; // default to medium if no size specified
    
    return `<svg class="${sizeClass}" viewBox="${icon.viewBox}" fill="none" stroke="currentColor">${icon.path}</svg>`;
}

// Update initializeIcons function
function initializeIcons() {
    document.querySelectorAll('[class*="icon-"]').forEach(element => {
        const iconName = Array.from(element.classList)
            .find(cls => cls.startsWith('icon-') && !cls.startsWith('icon-sm') && !cls.startsWith('icon-md') && !cls.startsWith('icon-lg'))
            ?.split('icon-')[1];
            
        if (iconName && ICONS[iconName]) {
            // Get size class from element
            const sizeClass = Array.from(element.classList)
                .find(cls => cls.startsWith('icon-') && (cls.endsWith('-sm') || cls.endsWith('-md') || cls.endsWith('-lg')));
            
            const size = ICON_SIZES[sizeClass] || ICON_SIZES['icon-md']; // default to medium
            element.innerHTML = createIcon(iconName, size);
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