import { useProgress, LEVELS } from '../context/ProgressContext.jsx'
import { courses } from '../data/courses.js'
import { Link } from 'react-router-dom'

export default function Profile() {
  const {
    xp,
    current,
    next,
    progressToNext,
    completed,
    totalCourses,
    reset,
    isCompleted,
  } = useProgress()

  return (
    <div className="page">
      <section className="page-head">
        <h1>个人中心 · 升级系统</h1>
        <p>完成课程获得经验值（XP），累计经验解锁更高等级。</p>
      </section>

      {/* Level card */}
      <section className="level-card">
        <div className="level-card-main">
          <div className="level-ring">
            <span className="level-num">Lv.{current.level}</span>
          </div>
          <div className="level-info">
            <h2>{current.title}</h2>
            <p className="level-xp-line">
              当前经验 <strong>{xp} XP</strong> · 已完成 {completed.length}/{totalCourses} 门课程
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressToNext}%` }} />
            </div>
            <p className="level-next">
              {next
                ? `距离「${next.title}」还需 ${next.minXp - xp} XP（${progressToNext}%）`
                : '🎉 已达到最高等级，你已是 Infra 架构师！'}
            </p>
          </div>
        </div>
        {completed.length > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={reset}>
            重置进度
          </button>
        )}
      </section>

      {/* Level ladder */}
      <section className="section">
        <div className="section-head">
          <h2>等级阶梯</h2>
          <p>从萌新到架构师的成长之路。</p>
        </div>
        <div className="ladder">
          {LEVELS.map((l) => {
            const reached = xp >= l.minXp
            const isCurrent = l.level === current.level
            return (
              <div
                key={l.level}
                className={`ladder-item ${reached ? 'reached' : ''} ${
                  isCurrent ? 'current' : ''
                }`}
              >
                <span className="ladder-lv">Lv.{l.level}</span>
                <span className="ladder-title">{l.title}</span>
                <span className="ladder-xp">{l.minXp} XP</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Completed courses */}
      <section className="section">
        <div className="section-head">
          <h2>我的课程</h2>
          <p>已完成的课程会计入经验。</p>
        </div>
        <div className="mycourse-list">
          {courses.map((c) => (
            <div
              key={c.id}
              className={`mycourse-row ${isCompleted(c.id) ? 'done' : ''}`}
            >
              <span className="mycourse-check">{isCompleted(c.id) ? '✓' : '○'}</span>
              <span className="mycourse-code">{c.code}</span>
              <span className="mycourse-name">{c.title}</span>
              <span className="mycourse-xp">+{c.xp} XP</span>
            </div>
          ))}
        </div>
        <p className="hint">
          去 <Link to="/courses">课程学习</Link> 页面标记完成来获得经验值。
        </p>
      </section>
    </div>
  )
}
