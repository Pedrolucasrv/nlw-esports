/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/Fundo.png')",
        "customGradient" : "linear-gradient(56.86deg, #9572FC 24.08%, #43E7AD 40.94%, #E1D55D 74.57%);",
        "gameGradient" : "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);"
      },
      colors: {
        
      }
    },
  },
  plugins: [],
}
