// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://Largehare.github.io',
  base: '/rexin.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
