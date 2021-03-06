import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { viteMockServe } from "vite-plugin-mock";

function pathResolve (dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      },
      // /#/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  },
  plugins: [
    vue(),
    eslintPlugin({
      // 配置项
    }),
    viteMockServe({
      supportTs: true
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true, // 兼容基于名字的主机
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
