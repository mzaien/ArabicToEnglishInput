import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    react(),
    solidJs(),
    svelte(),
    vue(),
    lit(),
    alpinejs(),
    mdx({
      extendMarkdownConfig: false,
      smartypants: true,
      gfm: true,
    }),
  ],
  site: `https://arabic-to-english-input.vercel.app/`,
});