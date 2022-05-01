import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 
import { resolve } from 'path'

function pathResolve (dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  },
  plugins: [vue()]
})
