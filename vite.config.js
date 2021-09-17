import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
export default defineConfig({
  base:"./",
  build: {
    minify: false,
    rollupOptions:{
      output:{
        format:'cjs'
      }
    },
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: './',

  },
  plugins: [vue()]
})