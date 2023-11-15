import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    tailwindcssAnimate(),],
})
