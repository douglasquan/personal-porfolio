import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "cyan-500": "#22d3ee", // Replace with your desired color value
        "emerald-500": "#10b981", // Replace with your desired color value
        "pink-500": "#ec4899", // Replace with your desired color value
        "indigo-500": "#6366f1", // Replace with your desired color value
        "orange-500": "#f97316", // Replace with your desired color value
        "yellow-500": "#eab308", // Replace with your desired color value
        "dark-slate-blue": "#282A36",
        light: "#F5F3F5",
        brown: "#302B27",
        "light-blue": "#576CA8",
        "marine-blue": "#274690",
        "space-blue": "#1B264F",
        "ash-gray": "#ABC8C7",
        "cadet-gray": "#A5B5BF",
        "light-red": "#e76f51",
        orange: "#f4a261",
        yellow: "#e9c46a",
        "primary-500": "#778DA9",
        "primary-700": "#5c6b7c"
      },
      borderRadius: {
        lg: "var(--radius, 1rem)",
        md: "calc(var(--radius, 1rem) - 2px)",
        sm: "calc(var(--radius, 1rem) - 4px)",
        "3rem": "3rem"
      },
      keyframes: {
        "random-glow": {
          // "0%, 100%": { backgroundPosition: "0% 0%" },
          // "25%": { backgroundPosition: "50% 0%" },
          // "50%": { backgroundPosition: "100% 10%" },
          // "75%": { backgroundPosition: "50% 50%" }

          // "0%, 100%": { backgroundPosition: "0% 0%" },
          // "25%": { backgroundPosition: "100% 0%" }, // Adjust these values
          // "50%": { backgroundPosition: "0% 50%" }, // to increase movement range
          // "75%": { backgroundPosition: "100% 50%" }

          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 10%" },
          "50%": { backgroundPosition: "0% 50%" },
          "75%": { backgroundPosition: "100% 30%" }
        }
      },
      animation: {
        "glow-random": "random-glow 15s ease-in-out infinite"
      },
      backgroundImage: {
        "top-glowing-gradient":
          "linear-gradient(to bottom, rgba(15,100,105,1) 0%, rgba(6,90,75,1) 20%, rgba(25,35,55,1) 50%, #1b1b2f 100%)"
      },
      backgroundSize: {
        "extra-large": "100% 600%"
      },
      spacing: {
        "0.7": "0.7rem"
      },
      backdropBlur: {
        "15px": "15px"
      },
      zIndex: {
        "20": "20"
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
        salsa: ["var(--font-salsa)"]
      },
      scrollSnapType: {
        y: "y mandatory"
      },
      height: {
        "50vh": "50vh",
        "70vh": "70vh"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    require("daisyui")
  ],

  daisyui: {
    themes: [
      "cupcake",
      "sunset",
      "cmyk",
      "night",
      "business",
      "dim",
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          primary: "#778DA9",
          secondary: "#415A77",
          neutral: "#E0E1DD",
          error: "#ff5555"
        }
      }
    ],
    darkTheme: "sunset",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root"
  }
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars
  });
}
