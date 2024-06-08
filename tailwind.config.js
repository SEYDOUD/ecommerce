/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,html}", // Ajoutez ici toutes les extensions de fichiers pertinents
  ],
  theme: {
    extend: {
      screens:{
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      },
      container:{
        center: true,
        padding: '1rem',
      },
      fontFamily:{
        poppins: "Poppins, sans-serif",
        roboto: "Roboto, sans-serif"
      },
      colors:{
        'primary':'#FD3D57',
        'secondary':'#324324'
      }
    },
  },
  variants:{
    extends:{
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

