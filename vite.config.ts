import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import tsPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  server: {
    //@ts-ignore
    https: false,
    port: 5173,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({}),
    mkcert({
      source: "coding",
    }),
    tsPaths(),
  ],
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
