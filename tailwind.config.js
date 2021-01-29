const {resolve} = require('path')

module.exports = {
  important: true,
  purge: {
    content: [resolve(__dirname, 'src/**/*.ts*')],
    safeList: ['can_embed'],
  },
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans'],
      },
      colors: {
        primary: {
          default: '#E5001C',
        },
      },

      /**
       * @tailwindcss/typography
       */
      typography: theme => ({
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: theme('colors.primary.default'),
              '&:hover': {
                color: theme('colors.red.700'),
              },
            },
          },
        },
      }),

      /**
       * tailwindcss-filters
       */
      filter: {
        none: 'none',
        grayscale: 'grayscale(1)',
        invert: 'invert(1)',
        sepia: 'sepia(1)',
        blur: 'blur(5px)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
}
