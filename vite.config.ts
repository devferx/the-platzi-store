import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@home": path.resolve(__dirname, "./src/domains/home"),
      "@cart": path.resolve(__dirname, "./src/domains/cart"),
      "@shared": path.resolve(__dirname, "./src/domains/shared"),
    },
  },
});
