/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
     screens: {
            'xs':'250px',
            'sm': '360px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1270px',
            '2xl' : '1536px'
        },
        
    extend: {
      colors:{
        'satin-gold': '#CBA135',
        'primary-clr1': '#FFBB00',
        'primary-clr2': '#CBA135',
        'primary-clr3': '#FFBD07',
        'primary-dark': '#706c6c',
        'text-dark': '#d4d3d3',
        'bg-darks':'#3a3939'
      },
      fontFamily: {
        sansserif:["sans-serif","Roboto"],
      },
    },
   
  },
  plugins: [],
}
