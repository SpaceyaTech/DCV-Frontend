/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        santoshi: ["Santoshi", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "contact-bg-desktop":
          "url('@/assets/images/contact/contactbg-desktop.png')",
        "contact-bg-mobile":
          "url('@/assets/images/contact/contactbg-mobile.png')",
        "form-background": "url('@/assets/images/contact/form-background.png')",
        "formbg-mobile": "url('@/assets/images/contact/formbg-mobile.png')",
        "hero-background": "url('@/assets/header-image.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "primary-blue": "#D9F0FF",
        "primary-main": "#0097F5",
        "primary-text": "#006AAC",
        "primary-100": "#D9F0FF",
        "primary-700": "#0080D0",
        "primary-1000": "#003D63",
        "secondary-main": "#FFD085",
        "background-main": "#FDF6ED",
        "background-blue": "#0097F5",
        "neutral-base-white": "#FAFAFA",
        primary600: "#1CA8FF",
        primary1000: "#003D63",
        secondary100: "#FFF3E0",
        "neutral-500": "#898384",
        secondary200: "#FFE8C2",
        secondary600: "#FFA10C",
        secondary800: "#BB7300",
        secondary1000: "#6A4100",
        neutrals300: "#B5B3B3",
        neutrals900: "#2B2829",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
