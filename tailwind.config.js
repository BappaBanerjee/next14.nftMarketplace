/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textColor: "#fff",
      colors: {
        // themes color
        "color-primary": "#00a3ff",
        "color-primary-alta": "#212e48",

        "color-gray": "#f6f6f6",
        "color-gray-2": "#f5f8fa",
        "color-subtitle": "#f9004d",

        // background-color
        "background-color-1": "#24243557",
        "background-color-2": "#13131d",
        "background-color-3": "#151521",
        "background-color-4": "#242435",
        "background-color-5": "#2424388c",
        "background-color-6": "#2e2e2e",
        "background-color-7": "#ffffff0a",
      },
    },
  },
  plugins: [],
};

// :root {
//     // themes color
//     --color-primary: #00a3ff;
//     --color-primary-alta: #212e48;

//     --color-gray: #f6f6f6;
//     --color-gray-2: #f5f8fa;
//     --color-subtitle: #f9004d;

//     // background-color
//     --background-color-1: #24243557;
//     --background-color-2: #13131d;
//     --background-color-3: #151521;
//     --background-color-4: #242435;

//     // color gradient
//     --gradient-one: linear-gradient(to right bottom, #2899d8, #00a3ff);

//     // typo Color
//     --color-heading: #ffffff;
//     --color-body: #acacac;
//     --color-dark:#1d1d1d;

//     --color-light-heading: #181c32;
//     --color-light-body: #65676b;
//     --color-border-white: #00000024;

//     // Gery Colors
//     --color-midgray: #878787;
//     --color-light: #E4E6EA;
//     --color-lighter: #CED0D4;
//     --color-lightest: #F0F2F5;
//     --color-border: #ffffff14;
//     --color-white: #ffffff;
//     --color-white-75: rgba(255, 255, 255, 0.75);

//     // notify Colors
//     --color-success: #3EB75E;
//     --color-danger: #FF0003;
//     --color-warning: #FF8F3C;
//     --color-info: #1BA2DB;

//     //Social icon colors
//     --color-facebook: #3B5997;
//     --color-twitter: #1BA1F2;
//     --color-youtube: #ED4141;
//     --color-linkedin: #0077B5;
//     --color-pinterest: #E60022;
//     --color-instagram: #C231A1;
//     --color-vimeo: #00ADEF;
//     --color-twitch: #6441A3;
//     --color-discord: #7289da;

//     // Font weight
//     --p-light: 300;
//     --p-regular: 400;
//     --p-medium: 500;
//     --p-semi-bold: 600;
//     --p-bold: 700;
//     --p-extra-bold: 800;
//     --p-black: 900;

//     // Font weight
//     --s-light: 300;
//     --s-regular: 400;
//     --s-medium: 500;
//     --s-semi-bold: 600;
//     --s-bold: 700;
//     --s-extra-bold: 800;
//     --s-black: 900;

//     //transition easing
//     --transition: 0.3s;

//     // Font Family
//     --font-primary: 'Roboto', sans-serif;
//     --font-secondary: 'Roboto', sans-serif;

//     //Fonts Size
//     --font-size-b1: 14px;
//     --font-size-b2: 18px;
//     --font-size-b3: 22px;

//     //Line Height
//     --line-height-b1: 1.50;
//     --line-height-b2: 1.6;
//     --line-height-b3: 1.7;

//     // Heading Font
//     --h1: 50px;
//     --h2: 36px;
//     --h3: 32px;
//     --h4: 26px;
//     --h5: 22px;
//     --h6: 20px;

// }
