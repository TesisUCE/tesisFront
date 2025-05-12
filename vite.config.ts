import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env": {
      VITE_API_URL: JSON.stringify("https://tesisuce-tesisuvillasapi.hf.space/analyze"),
    },
  }
});
