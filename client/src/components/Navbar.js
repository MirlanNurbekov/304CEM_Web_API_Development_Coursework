import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';

export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <a href="/firstSource">First source</a>
    <a href="/secondSource">Second source</a>
    <a href="/savedInformation">Saved information</a>
    <a href="/">Log out</a>
  </div>
    </nav>
}

function CustommLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}