/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        divider: "var(--divider)",
        text: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },
        accent: { blue: "var(--accent-blue)", teal: "var(--accent-teal)" }
      },
      borderRadius: { xl2: "14px" },
      boxShadow: { 
        glass: "0 10px 30px rgba(0,0,0,0.06)",
        'mobile-card': "0 4px 20px rgba(0,0,0,0.08)"
      },
      keyframes: {
        dash: { "0%": { "stroke-dashoffset": "120" }, "100%": { "stroke-dashoffset": "0" } }
      },
      animation: { dash: "dash 1.2s ease-out forwards" }
    }
  },
  plugins: []
};
