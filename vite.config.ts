import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/rawseed-webapp/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Separate vendor libraries
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },

        // Optimize chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
