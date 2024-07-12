import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F0F4FF',
          200: '#D9E2FF',
          300: '#A6C1FF',
          400: '#598BFF',
          500: '#3366FF',
          600: '#254EDB',
          700: '#1939B7',
          800: '#102693',
          900: '#091A7A'
        },
        secondary: {
          100: '#F4F7FA',
          200: '#E5EBF2',
          300: '#CBD4E3',
          400: '#8E9BB3',
          500: '#63718E',
          600: '#4F5B75',
          700: '#3F4760',
          800: '#31374A',
          900: '#262C3C'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
