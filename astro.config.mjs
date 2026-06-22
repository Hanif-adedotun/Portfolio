import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hanif.one",
  output: 'static',
  redirects: {
    '/certifications': '/cv',
  },
  integrations: [
    mdx(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['hanif.one', 'lazy-customer.outray.app'],
    }
  }
  
});
