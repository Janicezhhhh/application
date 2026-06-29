// 技术论坛（简化版入口）：核心模块优先，先用示例帖子搭好结构，
// 后续可接入真实后端（如 Discourse / 自建 API）。

const categories = [
  { name: '路径答疑', desc: '转行规划、阶段衔接、时间安排', count: 128 },
  { name: 'CUDA / 算子', desc: 'kernel 优化、性能调试', count: 86 },
  { name: '大模型训练', desc: '分布式、显存、混合精度', count: 152 },
  { name: '推理部署', desc: 'vLLM、量化、服务化', count: 73 },
  { name: '求职内推', desc: '面经、岗位、简历', count: 64 },
]

const posts = [
  {
    title: '0 基础程序员，3 个月跟完 CS336 的踩坑记录',
    author: 'infra_newbie',
    tag: '大模型训练',
    replies: 42,
    hot: true,
  },
  {
    title: '手写第一个 CUDA matmul，从 2% 到 60% 峰值算力的优化过程',
    author: 'kernel_kid',
    tag: 'CUDA / 算子',
    replies: 31,
    hot: true,
  },
  {
    title: '后端转 AI Infra 值得吗？聊聊我的真实薪资与岗位选择',
    author: 'switcher2024',
    tag: '求职内推',
    replies: 88,
    hot: true,
  },
  {
    title: 'vLLM 部署 7B 模型，单卡吞吐调优实测对比',
    author: 'serve_master',
    tag: '推理部署',
    replies: 19,
    hot: false,
  },
  {
    title: '阶段 1 到阶段 2 卡住了，数学基础要补到什么程度？',
    author: 'math_anxious',
    tag: '路径答疑',
    replies: 27,
    hot: false,
  },
]

export default function Forum() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>技术论坛</h1>
        <p>
          和同路人交流踩坑经验、分享笔记、结伴学习。当前为内容预览版，
          后续将接入完整的发帖与登录功能。
        </p>
        <button className="btn btn-primary" disabled title="即将上线">
          + 发布新帖（即将上线）
        </button>
      </section>

      <div className="forum-layout">
        <aside className="forum-cats">
          <h3>板块</h3>
          {categories.map((c) => (
            <div key={c.name} className="cat-item">
              <div>
                <strong>{c.name}</strong>
                <p>{c.desc}</p>
              </div>
              <span className="cat-count">{c.count}</span>
            </div>
          ))}
        </aside>

        <section className="forum-posts">
          <h3>热门讨论</h3>
          {posts.map((p) => (
            <article key={p.title} className="post-row">
              <div className="post-main">
                <h4>
                  {p.hot && <span className="hot-tag">热</span>}
                  {p.title}
                </h4>
                <div className="post-meta">
                  <span className="post-tag">{p.tag}</span>
                  <span>by {p.author}</span>
                </div>
              </div>
              <div className="post-replies">
                <strong>{p.replies}</strong>
                <span>回复</span>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
