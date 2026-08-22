import pug from '@vituum/vite-plugin-pug';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [pug()],
  ...(command === 'build' && {
    build: {
      rollupOptions: {
        input: ['index.pug.html'],
        output: { dir: 'dist' },
      },
    },
  }),
  server: { port: 3000 },
  preview: { port: 3001 },
}));
