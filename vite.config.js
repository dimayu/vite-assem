// vite.config.js
import { defineConfig } from 'vite';
import { glob } from 'glob';
import { resolve } from 'path';
import handlebars from "vite-plugin-handlebars";
import babel from 'rollup-plugin-babel';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import autoprefixer from 'autoprefixer';
import webp from 'vite-plugin-webp';

export default defineConfig({
  base: './',
  root: resolve(__dirname, 'src'),

  server: {
    port: 8080,
    open: true
  },
  
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
    }),
    eslint(),
    stylelint({
      fix: true,
    }),
    webp({
      onlyWebp: resolve(__dirname, 'src/img'),
      imageType: ['.png', '.jpg']
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync(resolve(__dirname, 'src', '**/*.html')),
      output: {
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'img/[name][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'css/[name][extname]';
          }
          
          return '[name][extname]';
        },
      },
    },
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        presets: ['@babel/preset-env'],
      }),
    ],
  },
});
