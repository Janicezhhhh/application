import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page notfound">
      <h1>404</h1>
      <p>这条路径还没有铺好。</p>
      <Link to="/" className="btn btn-primary">
        返回路径概述
      </Link>
    </div>
  )
}
