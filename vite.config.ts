import { defineConfig } from "vite";
import { mdx } from "@cyco130/vite-plugin-mdx";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // This should come _before_ plugin-react
    mdx(),
    react(),
  ],
});
