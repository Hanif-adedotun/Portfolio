import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://v2.hanif.one",
  integrations: [mdx(), icon(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['react-syntax-highlighter'],
    },
    ssr: {
      external: ['react-syntax-highlighter'],
    },
  },
});