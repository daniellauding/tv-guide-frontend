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
  'chevron-up': `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>`,

    'chevron-down': `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>`,
  calendar: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`,
  like: `<svg class="w-6 h-6" viewBox="0 0 22 22" fill="none" stroke="currentColor">
        <path d="M6 21V10M1 12V19C1 20.1046 1.89543 21 3 21H16.4262C17.907 21 19.1662 19.9197 19.3914 18.4562L20.4683 11.4562C20.7479 9.6389 19.3418 8 17.5032 8H14C13.4477 8 13 7.55228 13 7V3.46584C13 2.10399 11.896 1 10.5342 1C10.2093 1 9.91498 1.1913 9.78306 1.48812L6.26394 9.40614C6.10344 9.76727 5.74532 10 5.35013 10H3C1.89543 10 1 10.8954 1 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  dislike: `<svg class="w-6 h-6" viewBox="0 0 22 22" fill="none" stroke="currentColor">
        <path d="M16.0001 1V12M21.0001 8.8V4.2C21.0001 3.07989 21.0001 2.51984 20.7821 2.09202C20.5903 1.71569 20.2844 1.40973 19.908 1.21799C19.4802 1 18.9202 1 17.8001 1H7.11806C5.65658 1 4.92584 1 4.33563 1.26743C3.81545 1.50314 3.37335 1.88242 3.06129 2.36072C2.70722 2.90339 2.59611 3.62564 2.37388 5.07012L1.8508 8.47012C1.5577 10.3753 1.41114 11.3279 1.69386 12.0691C1.94199 12.7197 2.4087 13.2637 3.01398 13.6079C3.70358 14 4.66739 14 6.59499 14H7.40005C7.96011 14 8.24013 14 8.45404 14.109C8.64221 14.2049 8.79519 14.3578 8.89106 14.546C9.00005 14.7599 9.00005 15.0399 9.00005 15.6V18.5342C9.00005 19.896 10.104 21 11.4659 21C11.7907 21 12.0851 20.8087 12.217 20.5119L15.5778 12.9502C15.7306 12.6062 15.807 12.4343 15.9278 12.3082C16.0346 12.1967 16.1658 12.1115 16.311 12.0592C16.4753 12 16.6635 12 17.0398 12H17.8001C18.9202 12 19.4802 12 19.908 11.782C20.2844 11.5903 20.5903 11.2843 20.7821 10.908C21.0001 10.4802 21.0001 9.9201 21.0001 8.8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  facebook: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>`,
  instagram: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
    </svg>`
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