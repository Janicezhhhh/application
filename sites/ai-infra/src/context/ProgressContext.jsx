import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { courses } from '../data/courses.js'

const STORAGE_KEY = 'ai-infra-progress-v1'

const ProgressContext = createContext(null)

// 升级系统的等级阶梯：达到对应累计经验即升级。
export const LEVELS = [
  { level: 1, title: '萌新 · Curious Coder', minXp: 0 },
  { level: 2, title: '入门 · ML Apprentice', minXp: 250 },
  { level: 3, title: '进阶 · Kernel Hacker', minXp: 600 },
  { level: 4, title: '熟练 · Systems Engineer', minXp: 1100 },
  { level: 5, title: '高手 · Infra Specialist', minXp: 1800 },
  { level: 6, title: '大师 · Infra Architect', minXp: 2600 },
]

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { completed: [] }
    const parsed = JSON.parse(raw)
    return { completed: Array.isArray(parsed.completed) ? parsed.completed : [] }
  } catch {
    return { completed: [] }
  }
}

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => loadState().completed)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed }))
  }, [completed])

  const toggleCourse = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    )
  }

  const isCompleted = (id) => completed.includes(id)

  const reset = () => setCompleted([])

  const xp = useMemo(
    () =>
      completed.reduce((sum, id) => {
        const course = courses.find((c) => c.id === id)
        return sum + (course?.xp ?? 0)
      }, 0),
    [completed],
  )

  const levelInfo = useMemo(() => {
    let current = LEVELS[0]
    for (const lvl of LEVELS) {
      if (xp >= lvl.minXp) current = lvl
    }
    const next = LEVELS.find((l) => l.minXp > xp) ?? null
    const span = next ? next.minXp - current.minXp : 1
    const into = xp - current.minXp
    const progressToNext = next ? Math.min(100, Math.round((into / span) * 100)) : 100
    return { current, next, progressToNext }
  }, [xp])

  const value = {
    completed,
    toggleCourse,
    isCompleted,
    reset,
    xp,
    totalCourses: courses.length,
    ...levelInfo,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
