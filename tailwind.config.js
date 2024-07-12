/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "DM Serif Display",
        secondary: "Nunito Sans",
      },
      boxShadow: {
        input: "3px 3px 6px #ffffff, -3px -3px 6px #c5c5c5",
      },
      colors: {
        primary: "#58bc82",
        primary_dark: "#35714e",
        primary_light: "#9bd7b4",
        secondary: "#5C5470",
        text: "#B9B4C7",
        text_50: "#c7c3d2",
        highlight: "#FAF0E6",
        inputBg: "#e8e8e8",
        formBg: "#e8e8e8",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        variants: {
          animation: ["motion-safe"],
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 ,  },
          "100%": { opacity: 1 },
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '792px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.35em',
    },
  },
  plugins: [],
}

