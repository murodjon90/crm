import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar ">
          <Link className="navbar-brand" to="/">Logo</Link>
          <ul className="d-flex list-unstyled gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/worker">Worker</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/position">Position</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academic">Academic Degree</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}
