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
        "dark-slate-blue": "#282A36",
        brown: "#302B27",
        "light-blue": "#576CA8",
        "marine-blue": "#274690",
        "space-blue": "#1B264F",
        "ash-gray": "#ABC8C7",
        "cadet-gray": "#A5B5BF",
        "light-red": "#e76f51",

        // primary: "#778DA9",
        // secondary: "#acc3e0",
        // accent: "#e09f20",
        white: "#e6f4f1",
        light: "#ABC8C7",
        "custom-transparent": "hsla(160, 52%, 71%, 0.05)", // for background
        "custom-shadow": "hsla(160, 52%, 71%, 0.2)", // for shadow
        primary: "#172C42",
        secondary: "#216A91",
        accent: "#745b3b",
        "accent-700": "#3e3a33",
        tertiary: "#c7cbd2",
        quaternary: "#7A93A7",
        dark: {
          primary: "#216A91",
          secondary: "#b4c2cd",
          accent: "#964B00",
          "accent-700": "#4d3e28",
          tertiary: "#002253",
          quaternary: "#7A93A7",
          light: "#282A36",
          neutral: "#ffffff"
        }
      },
      borderRadius: {
        lg: "var(--radius, 1rem)",
        md: "calc(var(--radius, 1rem) - 2px)",
        sm: "calc(var(--radius, 1rem) - 4px)",
        "3rem": "3rem"
      },
      boxShadow: {
        custom: "0 0 10px hsla(160, 52%, 71%, 0.2)" // custom shadow
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
        // "top-glowing-gradient":
        //   "linear-gradient(to bottom, #0D1B2A 0%, #1B263B 20%, #415A77 50%, #778DA9 80%, #E0E1DD 100%)"
        // "top-glowing-gradient":
        //   "linear-gradient(to bottom, #778da9 0%, #5ba9c5 20%, #39c5ca 40%, #58ddb6 60%, #a2ef91 80%, #f9f871 100%)"
        // "top-glowing-gradient":
        //   "linear-gradient(to bottom, #1b263b 0%, #00506c 40%, #007f8c 70%, #00ad90 100%)"
        "top-glowing-gradient":
          "linear-gradient(to bottom, #88bdbc 0%, #70aabe 20%, #6d94ba 40%, #7c7baa 60%, #8c608a 80%, #8f4760 100%)",

        "dark-top-glowing-gradient":
          "linear-gradient(to bottom, #172c42 0%, #1d3146 20%, #22354b 50%, #283a4f 80%, #2d3e53 100%)"
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
        salsa: ["var(--font-salsa)"],
        lato: ["var(--font-lato)"]
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
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"]
    }
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
