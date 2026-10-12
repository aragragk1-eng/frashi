/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        frashi: {
          cream: "#FAF8F5",
          sand: "#F3EFEA",
          linen: "#E8E2D8",
          warmGray: "#D1C9BD",
          stone: "#8C8275",
          charcoal: "#2B2824",
          dark: "#1A1816",
          black: "#11100E",
          oak: "#A07855",
          oakDark: "#68482D",
          amber: "#C88A58",
          terracotta: "#B85D43",
          gold: "#D4AF37",
          olive: "#5C6B50",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        arabic: ["Cairo", "Amiri", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 24, 22, 0.06)',
        'luxury': '0 20px 40px -15px rgba(27, 24, 22, 0.1)',
        'elevated': '0 30px 60px -12px rgba(27, 24, 22, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
