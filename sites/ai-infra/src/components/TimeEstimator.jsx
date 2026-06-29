import { useState } from 'react'
import { courses, totalCourseHours } from '../data/courses.js'
import { useProgress } from '../context/ProgressContext.jsx'

// 用时评估器：根据每周可投入小时数，估算学完剩余课程所需时间。
// 结合升级系统里已完成的课程，动态扣减已学工时。
export default function TimeEstimator() {
  const { completed } = useProgress()
  const [weekly, setWeekly] = useState(10)

  const doneHours = courses
    .filter((c) => completed.includes(c.id))
    .reduce((sum, c) => sum + c.hours, 0)
  const remaining = totalCourseHours - doneHours

  const w = Math.max(1, weekly)
  const weeks = Math.ceil(remaining / w)
  const months = remaining > 0 ? (remaining / w / 4.345).toFixed(1) : '0'
  const donePct = Math.round((doneHours / totalCourseHours) * 100)

  return (
    <div className="estimator">
      <div className="estimator-top">
        <div className="est-stat">
          <span className="est-num">{totalCourseHours}h</span>
          <span className="est-label">课程总工时</span>
        </div>
        <div className="est-stat">
          <span className="est-num done">{doneHours}h</span>
          <span className="est-label">已完成（{donePct}%）</span>
        </div>
        <div className="est-stat">
          <span className="est-num remain">{remaining}h</span>
          <span className="est-label">剩余工时</span>
        </div>
      </div>

      <div className="estimator-bar">
        <div className="estimator-fill" style={{ width: `${donePct}%` }} />
      </div>

      <div className="estimator-control">
        <label htmlFor="weekly">
          每周可投入学习时间：<strong>{weekly} 小时</strong>
        </label>
        <input
          id="weekly"
          type="range"
          min="2"
          max="40"
          step="1"
          value={weekly}
          onChange={(e) => setWeekly(Number(e.target.value))}
        />
        <div className="estimator-ticks">
          <span>2h</span>
          <span>20h</span>
          <span>40h</span>
        </div>
      </div>

      <div className="estimator-result">
        {remaining > 0 ? (
          <>
            按每周 <strong>{weekly}</strong> 小时，预计还需{' '}
            <strong className="hl">{weeks}</strong> 周（约{' '}
            <strong className="hl">{months}</strong> 个月）学完剩余课程。
          </>
        ) : (
          <>🎉 所有课程已完成，你已走完整条学习路径！</>
        )}
      </div>
      <p className="estimator-note">
        工时为自学（看课 + 做作业）的粗略估计，仅供规划参考；在
        <a href="#/courses"> 课程学习 </a>
        标记完成后，剩余工时会自动更新。
      </p>
    </div>
  )
}
