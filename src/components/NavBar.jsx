import '../styles/NavBar.css'
import { Link } from "react-router-dom"

function NavBar({ active, page }) {
  return (
    <nav className="navbar-dark bg-dark position-fixed container-fluid" style={{zIndex: 1}}>
      <div className='d-flex justify-content-between text-white'>
        <div className='m-2 fs-3 d-inline-flex justify-content-start align-items-center text-white'>
          {page}
        </div>
        <div className="m-2 btn-group">
          <button type="button" className="navbarbtn btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><Link to="/projects" className={active === "Projects" ? "dropdown-item active" : "dropdown-item"} replace>Projects</Link></li>
            <li><Link to="/tutorials" className={active === "Tutorials" ? "dropdown-item active" : "dropdown-item"} replace>Tutorials</Link></li>
            <li><Link to="/" className={active === "home" ? "dropdown-item active" : "dropdown-item"} replace>About me</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
