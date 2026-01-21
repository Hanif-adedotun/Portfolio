import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), tailwind(), icon(), react()],
});