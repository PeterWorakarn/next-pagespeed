module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.js',
  './src/**/*.ts',
  './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}
