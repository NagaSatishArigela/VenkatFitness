import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // Options
      algorithm: "gzip", // Use gzip compression
      ext: ".gz", // The file extension to append for compressed files
      threshold: 10240, // Minimum file size to compress (in bytes)
      deleteOriginFile: false, // Set to true to delete original files
    }),
  ],
});
