import { NavLink } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'

const links = [
  { to: '/', label: '路径概述', end: true },
  { to: '/courses', label: '课程学习' },
  { to: '/forum', label: '技术论坛' },
  { to: '/competition', label: '竞赛' },
  { to: '/profile', label: '个人中心' },
]

export default function Navbar() {
  const { current, xp } = useProgress()

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-logo">◆</span>
        <span className="brand-text">
          AI Infra <em>Roadmap</em>
        </span>
      </NavLink>

      <nav className="nav-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/profile" className="nav-level" title="当前等级">
        <span className="nav-level-badge">Lv.{current.level}</span>
        <span className="nav-level-xp">{xp} XP</span>
      </NavLink>
    </header>
  )
}
