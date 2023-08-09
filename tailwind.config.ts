import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      headerBackground: {
        'linear-gradient':
          'transparent linear-gradient(90deg, #D20653 0%, #9B0257 100%) 0% 0% no-repeat padding-box',
      },
      colors: {
        pink: '#D20653',
        'dark-pink': '#9B0257',
        zink: '#323232',
        neutral: {
          base: '#414141',
        },
        gray: '#808080',
        purple: '#44215D',
        yellow: '#FDBC01',
      },
      fontFamily: {
        sans: ['var(--font-tajawal)'],
      },
      boxShadow: {
        main: '3px 5px 37px #00000017;',
      },
      // typography: (theme) => ({})
    },
  },
  plugins: [],
}
export default config
