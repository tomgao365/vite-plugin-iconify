import { defineConfig } from 'vite';
import iconify from '@tomjs/vite-plugin-iconify';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});
