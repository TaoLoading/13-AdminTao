import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    /* proxy: {
      '/api': {
        target: 'http://192.168.51.4:8000',
        rewrite: path => path.replace(/^\/api/, '')
      }
    } */
  }
})
