import { useState } from 'react'
import { courses } from '../data/courses.js'
import { useProgress } from '../context/ProgressContext.jsx'

const levels = ['全部', '基础', '进阶', '专题']

export default function Courses() {
  const { isCompleted, toggleCourse, completed } = useProgress()
  const [filter, setFilter] = useState('全部')

  const shown =
    filter === '全部' ? courses : courses.filter((c) => c.level === filter)

  return (
    <div className="page">
      <section className="page-head">
        <h1>课程学习</h1>
        <p>
          每门课程都链接到学校的官方公开课主页。学完后点击「标记完成」即可累计经验值，
          推动你的等级成长。已完成 <strong>{completed.length}</strong> / {courses.length} 门。
        </p>
        <div className="filters">
          {levels.map((l) => (
            <button
              key={l}
              className={`filter-btn ${filter === l ? 'active' : ''}`}
              onClick={() => setFilter(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </section>

      <section className="course-grid">
        {shown.map((c) => {
          const done = isCompleted(c.id)
          return (
            <article key={c.id} className={`course-card ${done ? 'is-done' : ''}`}>
              <div className="course-card-top">
                <span className="course-code">{c.code}</span>
                <span className={`level-tag level-${c.level}`}>{c.level}</span>
              </div>

              <h3 className="course-title">{c.title}</h3>
              <div className="course-meta">
                <span>{c.school}</span>
                <span>·</span>
                <span>{c.term}</span>
                <span>·</span>
                <span className="course-xp">+{c.xp} XP</span>
              </div>

              <p className="course-summary">{c.summary}</p>
              <p className="course-focus">🎯 {c.focus}</p>

              <div className="chips">
                {c.tags.map((t) => (
                  <span key={t} className="chip chip-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="course-actions">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  前往课程主页 ↗
                </a>
                <button
                  className={`btn btn-sm ${done ? 'btn-done' : 'btn-ghost'}`}
                  onClick={() => toggleCourse(c.id)}
                >
                  {done ? '✓ 已完成' : '标记完成'}
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
