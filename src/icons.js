const ICONS = {
    search: {
        path: `<path d="M15.6095 13.7241L12.2248 10.3394C12.9241 9.28543 13.3335 8.02342 13.3335 6.66674C13.3335 2.9907 10.3428 0 6.66674 0C2.9907 0 0 2.9907 0 6.66674C0 10.3428 2.9907 13.3335 6.66674 13.3335C8.02342 13.3335 9.28543 12.9241 10.3394 12.2248L13.7241 15.6095C14.2441 16.1302 15.0895 16.1302 15.6095 15.6095C16.1302 15.0888 16.1302 14.2448 15.6095 13.7241ZM2.00002 6.66674C2.00002 4.09338 4.09338 2.00002 6.66674 2.00002C9.2401 2.00002 11.3335 4.09338 11.3335 6.66674C11.3335 9.2401 9.2401 11.3335 6.66674 11.3335C4.09338 11.3335 2.00002 9.2401 2.00002 6.66674Z"/>`,
        viewBox: "0 0 16 16"
    },
    menu: {
        path: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`,
        viewBox: "0 0 24 24"
    },
    close: {
        path: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`,
        viewBox: "0 0 24 24"
    },
    arrow: {
        path: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>`,
        viewBox: "0 0 24 24"
    },
    time: {
      path: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>`,
      viewBox: "0 0 24 24"
  }
};

const SIZES = {
    xs: 'w-3 h-3',
    s: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
};

function getIcon(name, size = 'md', className = '') {
    const icon = ICONS[name];
    if (!icon) return '';
    
    const sizeClass = SIZES[size] || SIZES.md;
    const classes = `${sizeClass} ${className}`.trim();
    
    return `<svg class="${classes}" viewBox="${icon.viewBox}" fill="none" stroke="currentColor">${icon.path}</svg>`;
}

// Make it available globally
window.getIcon = getIcon; 