import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // CRA's default build output
  },
  resolve: {
  alias: [
      {
        find: "@Component",
        replacement: path.resolve(
          __dirname,
          "./src/component/"
        ),
      },

      {
        find: "@Style",
        replacement: path.resolve(
          __dirname,
          "./src/css/"
        ),
      },
      {
        find: "@Page",
        replacement: path.resolve(
          __dirname,
          "./src/component/pages"
        ),
      },
      {
        find: "@actionTypes",
        replacement: path.resolve(
          __dirname,
          "./src/constants/actionTypes"
        ),
      },
    ],
  }
});