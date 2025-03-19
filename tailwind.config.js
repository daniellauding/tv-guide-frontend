/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: 'class',
  important: true,
  future: {
    // Disable modern CSS features that might not be supported in all browsers
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
  // Add the 'features' key to disable the use of :is() selector
  features: {
    // This will prevent the use of :is() in the compiled CSS
    matchVariant: false,
  },
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
    // Border color classes
    'border-dark',
    'border-light',
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
          50: 'var(--primary-50, #fff3e6)',
          100: 'var(--primary-100, #ffe0cc)',
          300: 'var(--primary-300, #ff9933)',
          500: 'var(--primary-500, #ff6b00)',
          600: 'var(--primary-600, #e65c00)',
          700: 'var(--primary-700, #cc5200)',
          DEFAULT: 'var(--primary-default, #ff6b00)',
          dark: 'var(--primary-dark, #cc5500)',
          light: 'var(--primary-light, #ff8533)',
        },
        secondary: {
          50: 'var(--secondary-50, #e6eef7)',
          100: 'var(--secondary-100, #ccddf0)',
          500: 'var(--secondary-500, #2b4c7e)',
          600: 'var(--secondary-600, #234066)',
          700: 'var(--secondary-700, #1a2f4d)',
          DEFAULT: 'var(--secondary-default, #2b4c7e)',
          dark: 'var(--secondary-dark, #1a2f4d)',
          light: 'var(--secondary-light, #406eb8)',
        },
        background: {
          light: 'var(--bg-light, #FCF6F2)',
          dark: 'var(--bg-dark, #261E17)',
          card: {
            light: 'var(--bg-card-light, #ffffff)',
            dark: 'var(--bg-card-dark, #343a40)',
          },
        },
        input: {
          light: {
            DEFAULT: 'var(--input-light, #FFFFFF)',
            hover: 'var(--input-light-hover, #F5F5F5)',
            active: 'var(--input-light-active, #EFEFEF)',
          },
          dark: {
            DEFAULT: 'var(--input-dark, #3B332C)',
            hover: 'var(--input-dark-hover, #3B332C)',
            active: 'var(--input-dark-active, #3B332C)',
          }
        },
        header: {
          DEFAULT: 'var(--header-bg, #fff)',
          light: {
            DEFAULT: 'var(--header-bg, #fff)',
            desktop: 'var(--header-bg-light-desktop, #f8f9fa)',
          },
          dark: {
            DEFAULT: 'var(--header-bg-dark, #000)',
            desktop: 'var(--header-bg-dark-desktop, #000)',
          }
        },
        footer: {
          DEFAULT: 'var(--footer-bg, #fff)',
          light: {
            DEFAULT: 'var(--footer-bg, #fff)',
            desktop: 'var(--footer-bg-light-desktop, #f8f9fa)',
          },
          dark: {
            DEFAULT: 'var(--footer-bg-dark, #000)',
            desktop: 'var(--footer-bg-dark-desktop, #000)',
          }
        },
        wrapper: {
          DEFAULT: 'var(--color-wrapper, #fff)',
          dark: 'var(--color-wrapper-dark, #fff)',
        },
        text: {
          DEFAULT: 'var(--color-text, #333333)',
          dark: 'var(--color-text-dark, #FFFFFF)',
          muted: 'var(--color-text-muted, #666666)',
          inverse: 'var(--color-text-inverse, #FFFFFF)',
          hover: 'var(--color-text-hover, #F37335)',
        },
        border: {
          light: 'var(--color-border-light, #E5E7EB)',
          dark: 'var(--color-border-dark, #303030)',
        },
        status: {
          live: 'var(--color-status-live, #FCC430)',
          upcoming: 'var(--color-status-upcoming, #198754)',
          ended: 'var(--color-status-ended, #6c757d)',
        },
        provider: {
          DEFAULT: 'var(--color-provider, #fff)',
          dark: 'var(--color-provider-dark, #fff)',
          text: {
            light: {
              DEFAULT: 'var(--color-provider-text-light, #000)',
              hover: 'var(--color-provider-text-light-hover, #000)',
              active: 'var(--color-provider-text-light-active, #000)',
            },
            dark: {
              DEFAULT: 'var(--color-provider-text-dark, #fff)',
              hover: 'var(--color-provider-text-dark-hover, #fff)',
              active: 'var(--color-provider-text-dark-active, #fff)',
            }
          },
          background: {
            DEFAULT: 'var(--color-provider-bg, #F0F0F0)',
            active: 'var(--color-provider-bg-active, #fff)',
            hover: 'var(--color-provider-bg-hover, #fff)',
            light: {
              DEFAULT: 'var(--color-provider-bg-light, #f8f9fa)',
              hover: 'var(--color-provider-bg-light-hover, #f8f9fa)',
              active: 'var(--color-provider-bg-light-active, #f8f9fa)',
            },
            dark: {
              DEFAULT: 'var(--color-provider-bg-dark, #000)',
              hover: 'var(--color-provider-bg-dark-hover, #000)',
              active: 'var(--color-provider-bg-dark-active, #000)',
            }
          }
        },
        chip: {
          text: {
            light: {
              DEFAULT: 'var(--color-date-text-light, #000)',
              hover: 'var(--color-date-text-light-hover, #000)',
              active: 'var(--color-date-text-light-active, #fff)',
            },
            dark: {
              DEFAULT: 'var(--color-date-text-dark, #fff)',
              hover: 'var(--color-date-text-dark-hover, #fff)',
              active: 'var(--color-date-text-dark-active, #000)',
            }
          },
          background: {
            DEFAULT: 'var(--color-date-bg, #F2F2F2)',
            active: 'var(--color-date-bg-active, #000)',
            hover: 'var(--color-date-bg-hover, #E5E5E5)',
            light: {
              DEFAULT: 'var(--color-date-bg-light, #F2F2F2)',
              hover: 'var(--color-date-bg-light-hover, #E5E5E5)',
              active: 'var(--color-date-bg-light-active, #000)',
            },
            dark: {
              DEFAULT: 'var(--color-date-bg-dark, #272727)',
              hover: 'var(--color-date-bg-dark-hover, #fff)',
              active: 'var(--color-date-bg-dark-active, #fff)',
            }
          }
        },
        progress: {
          DEFAULT: 'var(--color-progress, #e5e7eb)',
          dark: 'var(--color-progress-dark, #e5e7eb)',
        },
        progressFill: {
          DEFAULT: 'var(--color-progress-fill, #FCC430)',
          dark: 'var(--color-progress-fill-dark, #FCC430)',
        },
        body: {
          DEFAULT: '#fff',
          dark: '#000',
          light: '#fff'
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
        select: {
          light: {
            DEFAULT: 'var(--color-select-light, #FFFFFF)',
            hover: 'var(--color-select-light-hover, #F5F5F5)',
            active: 'var(--color-select-light-active, #EFEFEF)',
          },
          dark: {
            DEFAULT: 'var(--color-select-dark, #3B332C)',
            hover: 'var(--color-select-dark-hover, #3B332C)',
            active: 'var(--color-select-dark-active, #495057)', // ✅ Fixed
          }
        },
        iconBtn: {
          light: {
            DEFAULT: 'var(--color-iconBtn-light, #FFFFFF)',
            hover: 'var(--color-iconBtn-light-hover, #F5F5F5)',
            active: 'var(--color-iconBtn-light-active, #EFEFEF)',
          },
          dark: {
            DEFAULT: 'var(--color-iconBtn-dark, #3B332C)',
            hover: 'var(--color-iconBtn-dark-hover, #3B332C)',
            active: 'var(--color-iconBtn-dark-active, #3B332C)',
          }
        },
        programHeader: {
          light: {
            DEFAULT: 'var(--program-header-light, #F9FAFB)',
            hover: 'var(--program-header-light-hover, #F9FAFB)',
            active: 'var(--program-header-light-active, #F9FAFB)',
          },
          dark: {
            DEFAULT: 'var(--program-header-dark, #60554C)',
            hover: 'var(--program-header-dark-hover, #60554C)',
            active: 'var(--program-header-dark-active, #60554C)',
          }
        },
        button: {
          icon: {
            light: {
              DEFAULT: 'var(--button-icon-light, #F5F5F5)',
              hover: 'var(--button-icon-light-hover, #E5E5E5)',
              active: 'var(--button-icon-light-active, #D4D4D4)',
            },
            dark: {
              DEFAULT: 'var(--button-icon-dark, #3B332C)',
              hover: 'var(--button-icon-dark-hover, #2E2620)',
              active: 'var(--button-icon-dark-active, #25211B)',
            }
          },
          flat: {
            light: {
              DEFAULT: 'var(--button-flat-light, #E0E0E0)',
              hover: 'var(--button-flat-light-hover, #CFCFCF)',
              active: 'var(--button-flat-light-active, #BEBEBE)',
            },
            dark: {
              DEFAULT: 'var(--button-flat-dark, #4A4037)',
              hover: 'var(--button-flat-dark-hover, #3E362F)',
              active: 'var(--button-flat-dark-active, #2F2B26)',
            }
          },
          primary: {
            light: {
              DEFAULT: 'var(--button-primary-light, #F37335)',
              hover: 'var(--button-primary-light-hover, #E65E20)',
              active: 'var(--button-primary-light-active, #D04A10)',
            },
            dark: {
              DEFAULT: 'var(--button-primary-dark, #FF8C42)',
              hover: 'var(--button-primary-dark-hover, #E67B35)',
              active: 'var(--button-primary-dark-active, #CC6C29)',
            }
          },
          secondary: {
            light: {
              DEFAULT: 'var(--button-secondary-light, #6C757D)',
              hover: 'var(--button-secondary-light-hover, #5B6369)',
              active: 'var(--button-secondary-light-active, #494F54)',
            },
            dark: {
              DEFAULT: 'var(--button-secondary-dark, #A0A7AD)',
              hover: 'var(--button-secondary-dark-hover, #8E959A)',
              active: 'var(--button-secondary-dark-active, #7C8388)',
            }
          },
          tertiary: {
            light: {
              DEFAULT: 'var(--button-tertiary-light, #F0F0F0)',
              hover: 'var(--button-tertiary-light-hover, #E2E2E2)',
              active: 'var(--button-tertiary-light-active, #D3D3D3)',
            },
            dark: {
              DEFAULT: 'var(--button-tertiary-dark, #3B3F42)',
              hover: 'var(--button-tertiary-dark-hover, #313538)',
              active: 'var(--button-tertiary-dark-active, #282B2E)',
            }
          }
        },
        programWrapper: {
          light: {
            DEFAULT: 'var(--program-wrapper-light, rgba(255, 255, 255, 1))',
            hover: 'var(--program-wrapper-light-hover, rgba(249, 255, 251, 1))',
            active: 'var(--program-wrapper-light-active, rgba(249, 255, 251, 1))',
          },
          dark: {
            DEFAULT: 'var(--program-wrapper-dark, #504943)',
            hover: 'var(--program-wrapper-dark-hover, #504943)',
            active: 'var(--program-wrapper-dark-active, #504943)',
          }
        },
        programItem: {
          light: {
            DEFAULT: 'var(--program-item-light, rgba(255, 255, 255, 1))',
            hover: 'var(--program-item-light-hover, rgba(249, 255, 251, 1))',
            active: 'var(--program-item-light-active, rgba(249, 255, 251, 1))',
          },
          dark: {
            DEFAULT: 'var(--program-item-dark, #504943)',
            hover: 'var(--program-item-dark-hover, #504943)',
            active: 'var(--program-item-dark-active, #504943)',
          }
        },
        logoChannel: {
          light: {
            DEFAULT: 'var(--logo-channel-light, #FFFFFF)',
            hover: 'var(--logo-channel-light-hover, #F5F5F5)',
            active: 'var(--logo-channel-light-active, #EFEFEF)',
          },
          dark: {
            DEFAULT: 'var(--logo-channel-dark, #303030)',
            hover: 'var(--logo-channel-dark-hover, #303030)',
            active: 'var(--logo-channel-dark-active, #303030)',
          }
        },
        title: {
          DEFAULT: 'var(--color-title, #F37335)',
          dark: 'var(--color-title-dark, #FFFFFF)',
          muted: 'var(--color-title-muted, #666666)',
          hover: 'var(--color-title-hover, #F37335)',
        },
        'icon': {
          DEFAULT: 'var(--color-icon, #000000)',
          dark: 'var(--color-icon-dark, #000000)',
          light: 'var(--color-icon-light, #000000)',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans, Inter, system-ui, sans-serif)',
        display: 'var(--font-display, Poppins, system-ui, sans-serif)',
        barlow: 'var(--font-barlow, Barlow, sans-serif)',
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