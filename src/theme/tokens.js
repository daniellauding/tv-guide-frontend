// Theme tokens for the TV Guide application
export const themeTokens = {
  // Color palette
  colors: {
    primary: {
      50: '#fff3e6',
      100: '#ffe0cc',
      300: '#ff9933',
      500: '#ff6b00', // Primary brand color
      600: '#e65c00',
      700: '#cc5200',
    },
    secondary: {
      50: '#e6eef7',
      100: '#ccddf0',
      500: '#2b4c7e',
      600: '#234066',
      700: '#1a2f4d',
    },
    gray: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
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

  // Typography
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      display: 'Poppins, system-ui, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
  },

  // Spacing
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  // Component specific
  components: {
    card: {
      borderRadius: '0.5rem',
      shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      shadowHover: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    },
    button: {
      primary: {
        background: '#ff6b00',
        text: '#ffffff',
        hover: '#e65c00',
      },
      secondary: {
        background: '#2b4c7e',
        text: '#ffffff',
        hover: '#234066',
      },
      default: {
        background: '#f8f9fa',
        text: '#212529',
        hover: '#e9ecef',
      },
    },
    input: {
      borderRadius: '0.375rem',
      borderColor: '#e9ecef',
      background: {
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
    modal: {
      overlay: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '0.5rem',
    },
    table: {
      background: {
        light: '#ffffff',
        dark: '#343a40',
      },
      borderColor: {
        light: '#e9ecef',
        dark: '#495057',
      },
      stripedBackground: {
        light: '#f8f9fa',
        dark: '#2b3035',
      },
    }
  }
}; 