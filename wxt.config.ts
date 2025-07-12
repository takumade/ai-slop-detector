import { defineConfig, type WxtViteConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "./src",
  manifest: {
    permissions: ['storage'],
  },
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
    alias: {
      "@": resolve("src"),
    }

  } as WxtViteConfig),
});
