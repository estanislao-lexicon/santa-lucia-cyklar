/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Noto', 'sans-serif'],
        body:['Lato', 'sans-serif'],
      },
      spacing: {
        'container': '24rem',
      },
      maxWidth: {
        'container': '1280px', // Set a maximum width for your container
      },
    },
    colors: {
      background: '#ede9dd',      
      'secondary-background': 'f9f7f3',
      'white': '#ffffff',
      'dark-text': '#404040',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.container': {
          paddingLeft: '8rem', // equivalent to px-24
          paddingRight: '8rem',
          maxWidth: '1280px', // Use the max width you defined above
          marginLeft: 'auto', // Center the container
          marginRight: 'auto',
          '@screen md': {
            paddingLeft: '14rem', // equivalent to md:px-48
            paddingRight: '14rem',
          },
          '@screen lg': {
            paddingLeft: '8rem', // equivalent to lg:px-72
            paddingRight: '8rem',
          },
        },
      });
    },  
  ],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    options: {
      safelist: [
        'fa',
        'fa-facebook',
        'fa-instagram',
        'fa-envelope',        
      ],
    },
  },
}

