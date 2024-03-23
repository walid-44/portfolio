import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 40,
      },
      svg: {
        quality: 100,
      },
    }),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
});
