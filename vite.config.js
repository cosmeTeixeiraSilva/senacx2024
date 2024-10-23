import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Redireciona chamadas para /api para o backend
      '/api': {
        target: 'http://localhost:3000/', // Altere para a URL do seu backend
        changeOrigin: true, // Altera a origem do host na requisição
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api do caminho
      },
    },
  },
});
