import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // 该站点是 application 多站点仓库下的一个子站，部署在
  // https://Janicezhhhh.github.io/application/ai-infra/ 子路径下。
  // 仅生产构建时启用该 base；本地 dev 保持 '/' 方便调试。
  base: command === 'build' ? '/application/ai-infra/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}))
