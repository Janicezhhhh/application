# application

Janicezhhhh 的多站点合集，统一部署在 GitHub Pages：
👉 https://Janicezhhhh.github.io/application/

## 站点列表

| 站点 | 目录 | 线上地址 |
|------|------|----------|
| AI Infra 学习路径 | `sites/ai-infra` | https://Janicezhhhh.github.io/application/ai-infra/ |

> 仓库未设置根门户页，请直接访问各子站点路径。

## 本地开发

```bash
cd sites/ai-infra
npm install
npm run dev          # 本地 dev 下 base 为 '/'，访问 http://localhost:5173/
```

## 部署

在**仓库根目录**运行：

```bash
npm install          # 安装根目录部署工具 (gh-pages)，仅首次需要
npm run deploy       # 构建所有子站点 -> 汇总到 publish/ -> 发布到 gh-pages 分支
```

部署脚本 [`scripts/deploy.mjs`](scripts/deploy.mjs) 会依次：
1. 构建 `sites/` 下每个子站点（`npm run build`）
2. 把各自产物拷到 `publish/<name>/`
3. 把整个 `publish/` 发布到 `gh-pages` 分支（GitHub Pages 源）

## 新增一个站点

1. 在 `sites/` 下新建站点目录（推荐同样用 Vite + React）
2. 该站点 `vite.config.js` 把生产 `base` 设为 `/application/<name>/`
3. 在 `scripts/deploy.mjs` 的 `SITES` 数组里加一行 `{ name: '<name>', dir: 'sites/<name>' }`
4. 仓库根目录运行 `npm run deploy`

线上地址即 `https://Janicezhhhh.github.io/application/<name>/`
