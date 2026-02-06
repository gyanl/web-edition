/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E5E7EB',
          300: 'rgba(209, 213, 215, 0.5)',
          500: '#797C81',
          600: '#4F5155',
          900: '#101419',
        },
        cyan: {
          50: '#FAFFFF',
        },
        rose: {
          700: '#A3143D',
        },
        red: {
          300: '#F7968C',
          600: '#EF2D19',
        },
      },
      fontFamily: {
        sans: ['TASA Orbiter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Besley', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '48px',
        '8xl': '56px',
        '9xl': '64px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        20: '80px',
        30: '120px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      letterSpacing: {
        tight: '-0.02em',
        'slightly-tight': '-0.01em',
        wide: '0.01em',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
        500: '500ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        '6xl': '1080px',
        '7xl': '1280px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'inner-strong': 'inset 0px 0px 12px 0px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
