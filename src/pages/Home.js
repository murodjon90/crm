import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <ul className="d-flex list-unstyled gap-5">
        <li className="nav-item">
          <Link className="nav-link fs-1" to="/worker">
            Worker
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-1" to="/position">
            Position
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-1" to="/academic">
            Academic Degree
          </Link>
        </li>
      </ul>
  </div>
  )
}
