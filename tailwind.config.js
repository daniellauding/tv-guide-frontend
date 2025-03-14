/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: 'class',
  important: true,
  safelist: [
    // Modal classes
    'fixed',
    'inset-0',
    'bg-black',
    'bg-opacity-50',
    'z-50',
    'z-60',
    'z-70',
    'z-80',
    'z-90',
    'z-100',
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
    'lg:grid-cols-4',
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
    'opacity-100',
    'opacity-90',
    'opacity-80',
    'opacity-70',
    'opacity-60',
    'opacity-50',
    'opacity-40',
    'opacity-30',
    'opacity-20',
    'opacity-10',
    'opacity-0',
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
    // Add gap utilities
    'gap-2',
    'gap-4',
    'gap-6',
    'gap-8',
    'w-3',
    'w-4',
    'w-5',
    'w-6',
    'w-8',
    'h-3',
    'h-4',
    'h-5',
    'h-6',
    'h-8',
    'mr-1',
    'mr-2',
    // Width utilities
    'w-fit',
    'w-3',
    'w-4',
    'w-5',
    'w-6',
    'w-8',
    'w-9',
    'w-10',
    'w-12',
    'w-16',
    'w-20',
    'w-24',
    'w-32',
    'w-auto',
    'w-full',
    // Max width utilities
    'max-w-lg',
    'max-w-7xl',
    'max-w-full',
    // Min width utilities
    'min-w-[120px]',
    // Responsive variants
    'md:w-8',
    'md:w-9',
    'md:w-10',
    'md:w-12',
    'md:w-16',
    'md:w-20',
    'md:w-24',
    'md:w-32',
    'md:w-64',
    'md:w-auto',
    'md:w-fit',
    'md:w-full',
    // Height matching utilities
    'h-3',
    'h-4',
    'h-5',
    'h-6',
    'h-8',
    'h-9',
    'h-10',
    'h-12',
    'h-16',
    'md:h-8',
    'md:h-10',
    'md:h-12',
    'md:h-16',
    'text-provider-text',
    'text-provider-text-active',
    'text-provider-text-hover',
    'bg-provider-background',
    'bg-provider-background-active',
    'bg-provider-background-hover',
    // Border radius utilities
    'rounded',
    'rounded-sm',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-2xl',
    'rounded-3xl',
    'rounded-full',
    
    // Shadow utilities
    'shadow',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
    'shadow-none',
    
    // Hover and focus variants
    'hover:shadow',
    'hover:shadow-md',
    'hover:shadow-lg',
    'hover:shadow-xl',
    'focus:shadow-outline',
    
    // Border radius with responsive variants
    'md:rounded',
    'md:rounded-lg',
    'md:rounded-full',
    
    // Border full
    'border-full',
    
    // Dark mode variants
    'dark:shadow-none',
    'dark:shadow-lg',
    
    // Negative margin utilities
    '-mt-1',
    '-mt-2',
    '-mt-4',
    '-mt-6',
    '-mt-8',
    '-mt-10',
    '-mt-12',
    '-mt-16',
    
    // Responsive variants
    'md:-mt-8',
    'lg:-mt-8',
    
    // Other directions
    '-mb-8',
    '-ml-8',
    '-mr-8',
    
    // All existing margin utilities
    'mt-1',
    'mt-2',
    'mt-4',
    'mt-6',
    'mt-8',
    'mt-10',
    'mt-12',
    'mt-16',
    
    // Translate utilities (negative and positive)
    '-translate-x-1/2',
    '-translate-x-full',
    '-translate-x-1',
    '-translate-x-2',
    '-translate-x-3',
    '-translate-x-4',
    '-translate-x-5',
    '-translate-x-6',
    '-translate-x-8',
    '-translate-x-10',
    
    '-translate-y-1/2',
    '-translate-y-full',
    '-translate-y-1',
    '-translate-y-2',
    '-translate-y-3',
    '-translate-y-4',
    '-translate-y-5',
    '-translate-y-6',
    '-translate-y-8',
    '-translate-y-10',
    
    'translate-x-1/2',
    'translate-x-full',
    'translate-x-1',
    'translate-x-2',
    'translate-x-3',
    'translate-x-4',
    'translate-x-5',
    
    'translate-y-1/2',
    'translate-y-full',
    'translate-y-1',
    'translate-y-2',
    'translate-y-3',
    'translate-y-4',
    'translate-y-5',
    
    // Responsive variants
    'md:-translate-y-1/2',
    'md:-translate-x-1/2',
    'lg:-translate-y-1/2',
    'lg:-translate-x-1/2',
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
          light: '#FCF6F2',
          dark: '#261E17',
          card: {
            light: '#ffffff',
            dark: '#343a40',
          },
        },
        header: {
          DEFAULT: '#F37335',
          dark: '#F37335',
        },
        wrapper: {
          DEFAULT: '#fff',
          dark: '#fff',
        },
        text: {
          DEFAULT: '#333333',
          dark: '#FFFFFF',
          muted: '#666666',
          inverse: '#FFFFFF',
          hover: '#F37335'
        },
        border: {
          light: '#e9ecef',
          dark: '#495057',
        },
        status: {
          live: '#FCC430',
          upcoming: '#198754',
          ended: '#6c757d',
        },
        provider: {
          DEFAULT: '#fff',
          dark: '#fff',
          text: {
            light: {
              DEFAULT: 'rgba(0,0,0,0.6)',
              hover: '#F79235',
              active: '#F79235'
            },
            dark: {
              DEFAULT: 'rgba(0,0,0,0.6)',
              hover: '#F79235',
              active: '#F79235'
            }
          },
          background: {
            DEFAULT: 'rgba(255, 255, 255, 0.7)',
            active: '#fff',
            hover: '#fff',
            light: {
              DEFAULT: '#fff',
              hover: '#F5F5F5',
              active: '#EFEFEF',
            },
            dark: {
              DEFAULT: '#fff',
              hover: '#F5F5F5',
              active: '#EFEFEF',
            }
          }
        },
        progress: {
          DEFAULT: '#e5e7eb',
          dark: '#e5e7eb',
        },
        progressFill: {
          DEFAULT: '#FCC430',
          dark: '#FCC430',
        },
        body: {
          DEFAULT: '#FCF6F2',
          dark: '#261E17',
        },
        filter: {
          DEFAULT: 'transparent',
          dark: 'transparent',
        },
        channel: {
          DEFAULT: '#fff',
          dark: '#fff',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#343a40',
        },
        input: {
          light: {
            DEFAULT: '#FFFFFF',
            hover: '#F5F5F5',
            active: '#EFEFEF',
          },
          dark: {
            DEFAULT: '#3B332C',
            hover: '#3B332C',
            active: '#3B332C',
          }
        },
        select: {
          light: {
            DEFAULT: '#FFFFFF',
            hover: '#F5F5F5',
            active: '#EFEFEF',
          },
          dark: {
            DEFAULT: '#3B332C',
            hover: '#3B332C',
            active: '#4953B332C057',
          }
        },
        iconBtn: {
          light: {
            DEFAULT: '#FFFFFF',
            hover: '#F5F5F5',
            active: '#EFEFEF',
          },
          dark: {
            DEFAULT: '#3B332C',
            hover: '#3B332C',
            active: '#3B332C',
          }
        },
        programHeader: {
          light: {
            DEFAULT: '#F9FAFB',
            hover: '#F9FAFB',
            active: '#F9FAFB',
          },
          dark: {
            DEFAULT: '#60554C',
            hover: '#60554C',
            active: '#60554C',
          }
        },
        programWrapper: {
          light: {
            DEFAULT: 'rgba(255, 255, 255, 1)',
            hover: 'rgba(249, 259, 251, 1)',
            active: 'rgba(249, 259, 251, 1)',
          },
          dark: {
            DEFAULT: '#504943',
            hover: '#504943',
            active: '#504943',
          }
        },
        programItem: {
          light: {
            DEFAULT: 'rgba(255, 255, 255, 1)',
            hover: 'rgba(249, 259, 251, 1)',
            active: 'rgba(249, 259, 251, 1)',
          },
          dark: {
            DEFAULT: '#504943',
            hover: '#504943',
            active: '#504943',
          }
        },
        logoChannel: {
          light: {
            DEFAULT: '#FFFFFF',
            hover: '#F5F5F5',
            active: '#EFEFEF',
          },
          dark: {
            DEFAULT: '#3B332C',
            hover: '#3B332C',
            active: '#3B332C',
          }
        },
        title: {
          DEFAULT: '#F37335',
          dark: '#FFFFFF',
          muted: '#666666',
          hover: '#F37335'
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      zIndex: {
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(116.82deg, #F37435 0%, #FDC730 99.59%)',
      },
    },
  },
  plugins: [],
} 