import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 部署到 GitHub Pages 的 https://Janicezhhhh.github.io/application/ 子路径下，
  // 必须设置 base，否则资源路径错误导致白屏。本地开发时 base 为 '/' 不受影响。
  base: '/application/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
