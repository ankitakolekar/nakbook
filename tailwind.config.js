// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./public/index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 Make sure this line is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
