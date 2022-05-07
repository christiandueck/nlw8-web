module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ['brand']: '#8257E5',
        ['brand-hover']: '#996DFF',
        ['text-on-brand-color']: '#FFFFFF',
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
