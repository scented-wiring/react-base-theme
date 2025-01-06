/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./cms-react-project/cms-react-app/styles/*.css",
    "./cms-react-project/cms-react-app/components/**/*.{js,jsx,ts,tsx}",
    "./cms-react-theme/assets/css/**/*.css",
    "./cms-react-theme/templates/**/*.html"
  ],
  safelist: [
    'uppercase',
    'normal-case',
    'text-primary',
    'text-secondary',
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
    'bg-dark',
    'bg-light',
    'bg-grey',
    'bg-black',
    'bg-white',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'max-w-[1440px]',
    'max-w-[1200px]',
    'max-w-[1080px]',
    'max-w-[520px]',
    'mx-auto',
    'ml-auto',
    'mr-auto',
    'justify-items-center',
    'justify-items-start',
    'justify-items-end'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        dark: 'var(--dark)',
        light: 'var(--light)',
        grey: 'var(--grey)',
        black: 'var(--black)',
        white: 'var(--white)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontSize: 'revert',
          fontWeight: 'revert',
        },
      });
    },
  ],
}

