/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: 'class',
  safelist: [
    // Modal classes
    'fixed',
    'inset-0',
    'bg-black',
    'bg-opacity-50',
    'z-50',
    'max-w-lg',
    'w-full',
    // Cursor classes
    'cursor-pointer',
    // Spacing and sizing
    'space-x-3',
    'space-x-6',
    'space-y-4',
    'mt-2',
    'mb-4',
    'mb-6',
    'p-2',
    'p-4',
    'p-6',
    'p-8',
    'px-4',
    'py-2',
    // Flex and Grid
    'flex-1',
    'flex-shrink-0',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-3',
    // Heights and widths
    'h-8',
    'h-12',
    'h-16',
    'h-24',
    'w-12',
    'w-16',
    'w-20',
    'w-24',
    // Text sizes
    'text-xs',
    'text-sm',
    'text-lg',
    'text-xl',
    'text-2xl',
    // Transitions
    'transition-colors',
    'hover:bg-gray-50',
    'hover:bg-gray-200',
    'dark:hover:bg-gray-600',
    'dark:hover:bg-gray-700',
    // Grid classes
    'grid',
    'gap-4',
    'gap-6',
    // Aspect ratio
    'aspect-video',
    // Flex classes
    'flex',
    'items-center',
    'justify-center',
    // Background colors
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-200',
    'bg-white',
    'dark:bg-gray-600',
    'dark:bg-gray-700',
    'dark:bg-gray-800',
    'dark:bg-gray-900',
    // Text colors
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'text-gray-900',
    'dark:text-gray-300',
    'dark:text-gray-400',
    'dark:text-gray-500',
    'dark:text-white',
    // Other utilities
    'rounded-lg',
    'shadow-sm',
    'hover:shadow-md',
    'overflow-hidden',
    'transition-shadow',
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'bg-gray-800',
    'dark:bg-gray-700',
    'text-gray-500',
    'text-gray-600',
    'dark:text-gray-300',
    'border-gray-200',
    'dark:border-gray-700',
    {
      pattern: /^(w|h)-\d+/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /^(m|p)[trblxy]?-\d+/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /^(flex|grid|space|rounded|border|shadow|transition).*/
    },
    'translate-x-1',
    'translate-x-5',
    'bg-primary-500',
    'h-3',
    'h-5',
    'w-3',
    'w-9',
    'aria-checked:bg-primary-500',
    'fill-gray-400',
    'fill-gray-600',
    'scale-95',
    'scale-100',
    'hover:scale-95',
    'active:scale-95',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3e6',
          100: '#ffe0cc',
          300: '#ff9933',
          500: '#ff6b00',
          600: '#e65c00',
          700: '#cc5200',
          DEFAULT: '#ff6b00',
          dark: '#cc5500',
          light: '#ff8533',
        },
        secondary: {
          50: '#e6eef7',
          100: '#ccddf0',
          500: '#2b4c7e',
          600: '#234066',
          700: '#1a2f4d',
          DEFAULT: '#2b4c7e',
          dark: '#1a2f4d',
          light: '#406eb8',
        },
        background: {
          light: '#f8f9fa',
          dark: '#1a1a1a',
          card: {
            light: '#ffffff',
            dark: '#343a40',
          },
          header: {
            light: '#ffffff',
            dark: '#343a40',
          },
          footer: {
            light: '#f8f9fa',
            dark: '#212529',
          },
        },
        text: {
          light: {
            primary: '#212529',
            secondary: '#495057',
            muted: '#868e96',
          },
          dark: {
            primary: '#f8f9fa',
            secondary: '#e9ecef',
            muted: '#adb5bd',
          },
        },
        border: {
          light: '#e9ecef',
          dark: '#495057',
        },
        status: {
          live: '#dc3545',
          upcoming: '#198754',
          ended: '#6c757d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      zIndex: {
        '50': '50',
      }
    },
  },
  plugins: [],
} 