import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://localhost:3000', // 你的后端接口地址
  //       changeOrigin: true, // 修改请求头中的 origin，避免 CORS 错误
  //       rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 /api 前缀
  //     },
  //   },
  // },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端服务地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
