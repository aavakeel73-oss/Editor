import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        editor: {
          background: '#0f172a',
          panel: '#1e293b',
          border: '#334155',
          accent: '#38bdf8',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
