import type { Plugin } from 'vite';

declare module '@vituum/vite-plugin-pug' {
  const plugin: () => Plugin;
  export default plugin;
}
