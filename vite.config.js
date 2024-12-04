import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        gama: resolve(__dirname, "src/gama.html"),
        contacta: resolve(__dirname, "src/contacta.html"),
      },
    },
  },
  base:'P3.1-Maquetaci-n-Responsive-con-SASS-y-Vite/',
});