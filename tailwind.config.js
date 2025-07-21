/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f5f1e6',
        ink: '#232020',
        sepia: '#9c7849',
        burgundy: '#722f37',
        sage: '#8a9a5b',
        cream: '#f9f7f0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lora', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/6633969/pexels-photo-6633969.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'quill-write': 'quillWrite 1.5s steps(40, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        quillWrite: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};