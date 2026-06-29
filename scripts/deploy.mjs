// 构建 application 仓库下的所有子站点，汇总到 publish/ 后发布到 gh-pages 分支。
// 每个子站点的构建产物放到 publish/<name>/，对应线上路径 /application/<name>/。
import { execSync } from 'node:child_process'
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// 新增站点时在这里加一行即可
const SITES = [{ name: 'ai-infra', dir: 'sites/ai-infra' }]

const PUBLISH = 'publish'

rmSync(PUBLISH, { recursive: true, force: true })
mkdirSync(PUBLISH, { recursive: true })

for (const site of SITES) {
  console.log(`\n=== building ${site.name} (${site.dir}) ===`)
  if (!existsSync(join(site.dir, 'node_modules'))) {
    execSync('npm install', { cwd: site.dir, stdio: 'inherit' })
  }
  execSync('npm run build', { cwd: site.dir, stdio: 'inherit' })
  cpSync(join(site.dir, 'dist'), join(PUBLISH, site.name), { recursive: true })
  console.log(`  -> ${PUBLISH}/${site.name}`)
}

console.log('\n=== publishing to gh-pages ===')
execSync(`npx gh-pages -d ${PUBLISH}`, { stdio: 'inherit' })
console.log('\nDone. 线上地址：')
for (const site of SITES) {
  console.log(`  https://Janicezhhhh.github.io/application/${site.name}/`)
}
