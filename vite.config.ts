import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  define: {
    "process.env": process.env,
  },
});
