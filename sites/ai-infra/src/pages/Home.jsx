import { Link } from 'react-router-dom'
import { roadmap } from '../data/roadmap.js'
import { getCourseById } from '../data/courses.js'
import { useProgress } from '../context/ProgressContext.jsx'
import TimeEstimator from '../components/TimeEstimator.jsx'

export default function Home() {
  const { isCompleted } = useProgress()

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <p className="hero-kicker">从普通程序员到 AI 基础设施工程师</p>
        <h1 className="hero-title">
          一条清晰的 <span className="grad">AI Infra</span> 转行路径
        </h1>
        <p className="hero-sub">
          不再大海捞针。按阶段学习，每一步都对应斯坦福最新公开课，配合升级系统、
          技术论坛与竞赛，把零散的知识变成可验证的成长。
        </p>
        <div className="hero-actions">
          <Link to="/courses" className="btn btn-primary">
            开始学习课程 →
          </Link>
          <Link to="/profile" className="btn btn-ghost">
            查看我的进度
          </Link>
        </div>
        <div className="hero-stats">
          <div>
            <strong>7</strong>
            <span>阶段路径</span>
          </div>
          <div>
            <strong>8+</strong>
            <span>斯坦福公开课</span>
          </div>
          <div>
            <strong>6</strong>
            <span>成长等级</span>
          </div>
        </div>
      </section>

      {/* Roadmap timeline */}
      <section className="section">
        <div className="section-head">
          <h2>学习路径概述</h2>
          <p>循序渐进的六个阶段 + 长期跟踪，覆盖从基础到上线的完整链路。</p>
        </div>

        <div className="timeline">
          {roadmap.map((stage, idx) => {
            const stageCourses = stage.courses.map(getCourseById).filter(Boolean)
            const doneCount = stageCourses.filter((c) => isCompleted(c.id)).length
            const allDone = stageCourses.length > 0 && doneCount === stageCourses.length
            return (
              <article key={stage.id} className={`tl-item ${allDone ? 'done' : ''}`}>
                <div className="tl-marker">
                  <span>{idx + 1}</span>
                </div>
                <div className="tl-card">
                  <div className="tl-card-head">
                    <span className="tl-stage">{stage.stage}</span>
                    <span className="tl-duration">{stage.duration}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  <p className="tl-goal">{stage.goal}</p>

                  <div className="chips">
                    {stage.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>

                  {stageCourses.length > 0 && (
                    <div className="tl-courses">
                      <span className="tl-courses-label">
                        推荐课程（{doneCount}/{stageCourses.length} 完成）：
                      </span>
                      {stageCourses.map((c) => (
                        <Link
                          key={c.id}
                          to="/courses"
                          className={`course-pill ${isCompleted(c.id) ? 'completed' : ''}`}
                        >
                          {isCompleted(c.id) ? '✓ ' : ''}
                          {c.code}
                        </Link>
                      ))}
                    </div>
                  )}

                  <p className="tl-note">💡 {stage.note}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Time estimator */}
      <section className="section">
        <div className="section-head">
          <h2>用时评估</h2>
          <p>按你每周能投入的时间，估算学完整条路径需要多久。</p>
        </div>
        <TimeEstimator />
      </section>

      {/* Module entries */}
      <section className="section">
        <div className="section-head">
          <h2>更多模块</h2>
          <p>学练结合，用社区和竞赛把知识落地。</p>
        </div>
        <div className="module-grid">
          <Link to="/courses" className="module-card">
            <span className="module-icon">📚</span>
            <h3>课程学习</h3>
            <p>精选斯坦福公开课，标记完成即可获得经验值。</p>
          </Link>
          <Link to="/profile" className="module-card">
            <span className="module-icon">⚡</span>
            <h3>升级系统</h3>
            <p>完成课程累计 XP，从「萌新」一路成长为「Infra 架构师」。</p>
          </Link>
          <Link to="/forum" className="module-card">
            <span className="module-icon">💬</span>
            <h3>技术论坛</h3>
            <p>交流踩坑经验、分享笔记、结伴学习。</p>
          </Link>
          <Link to="/competition" className="module-card">
            <span className="module-icon">🏆</span>
            <h3>竞赛区</h3>
            <p>用算子优化、推理加速等实战题检验你的功力。</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
