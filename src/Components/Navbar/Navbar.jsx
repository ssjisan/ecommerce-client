import { Link } from "react-router-dom";

export default function Navbar() {
    const LinkStyle={
        textDecoration:"none",
    }
  return (
    <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #d4d4d4"}}>
      <div className="container-fluid">
        <img src="/logo.png" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/"style={LinkStyle}>Home</Link>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <Link to="/login" >
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </Link>
            <Link to="/register-user">
              <button type="button" className="btn btn-secondary">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
