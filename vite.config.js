import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  server: {  // ついでに 5000 ポートで起動するように設定しておく
    port: 5000,
    strictPort: true
  }
});
