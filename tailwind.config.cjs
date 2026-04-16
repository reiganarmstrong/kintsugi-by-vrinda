module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-radial': {
          '-webkit-mask-image': 'radial-gradient(circle, black 50%, rgba(0, 0, 0, 0) 100%)',
          'mask-image': 'radial-gradient(circle, black 50%, rgba(0, 0, 0, 0) 100%)',
        },
        '.mask-linear': {
          '-webkit-mask-image': 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          'mask-image': 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        },
      })
    },
  ],
}