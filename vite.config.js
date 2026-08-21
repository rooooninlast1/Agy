import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
        'project-1': resolve(__dirname, 'project-1.html'),
        'project-2': resolve(__dirname, 'project-2.html'),
        'project-3': resolve(__dirname, 'project-3.html'),
        'project-4': resolve(__dirname, 'project-4.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
