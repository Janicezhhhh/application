// 竞赛区（简化版入口）：用实战题检验所学，先展示赛题结构，后续可接入评测与排行。

const contests = [
  {
    title: 'CUDA 算子优化挑战赛',
    status: '进行中',
    desc: '在给定 GPU 上把一个 GEMM/Softmax kernel 优化到尽可能接近峰值算力。',
    difficulty: '进阶',
    participants: 312,
    reward: '500 XP + 排行榜徽章',
  },
  {
    title: 'LLM 推理加速赛',
    status: '报名中',
    desc: '在固定显存预算下，最大化 7B 模型的 token 吞吐（量化 / 批处理 / KV Cache）。',
    difficulty: '高级',
    participants: 187,
    reward: '800 XP + 名企内推',
  },
  {
    title: '从零实现 mini-Transformer',
    status: '长期开放',
    desc: '不借助高层框架，手写训练循环并复现一个小型语言模型。新手友好。',
    difficulty: '入门',
    participants: 524,
    reward: '300 XP',
  },
]

const leaderboard = [
  { rank: 1, name: 'tensor_titan', score: 9820 },
  { rank: 2, name: 'cache_wizard', score: 9510 },
  { rank: 3, name: 'flop_hunter', score: 9304 },
  { rank: 4, name: 'latency_lord', score: 8890 },
  { rank: 5, name: 'kernel_kid', score: 8755 },
]

export default function Competition() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>竞赛区</h1>
        <p>
          把算子优化、推理加速、模型实现做成可量化的实战题。当前为预览版，
          完整的提交评测与实时排行即将上线。
        </p>
      </section>

      <section className="contest-grid">
        {contests.map((c) => (
          <article key={c.title} className="contest-card">
            <div className="contest-top">
              <span className={`status-tag status-${c.status}`}>{c.status}</span>
              <span className="diff-tag">{c.difficulty}</span>
            </div>
            <h3>{c.title}</h3>
            <p className="contest-desc">{c.desc}</p>
            <div className="contest-foot">
              <span>👥 {c.participants} 人参与</span>
              <span className="contest-reward">🎁 {c.reward}</span>
            </div>
            <button className="btn btn-ghost btn-sm" disabled>
              查看赛题（即将上线）
            </button>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>总排行榜</h2>
          <p>综合各赛事得分。</p>
        </div>
        <div className="leaderboard">
          {leaderboard.map((p) => (
            <div key={p.rank} className={`lb-row rank-${p.rank}`}>
              <span className="lb-rank">
                {p.rank <= 3 ? ['🥇', '🥈', '🥉'][p.rank - 1] : p.rank}
              </span>
              <span className="lb-name">{p.name}</span>
              <span className="lb-score">{p.score.toLocaleString()} 分</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
