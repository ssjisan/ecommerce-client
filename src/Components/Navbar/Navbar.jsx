import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Navbar() {
  const { auth, setAuth } = useContext(DataContext);
  const navigate = useNavigate();
  const LinkStyle = {
    textDecoration: "none",
  };
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ borderBottom: "1px solid #d4d4d4" }}
    >
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
              <Link to="/" style={LinkStyle} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/secret" style={LinkStyle} className="nav-link">
                Secret
              </Link>
            </li>
          </ul>
          {auth.user ? (
            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {auth?.user?.name}
              </button>
              <ul className="dropdown-menu">
                <Link
                  to={`${auth?.user?.role === 1 ? "/admin-dashboard" : "/user-dashboard"}`}
                  style={LinkStyle}
                  className="dropdown-item"
                >
                  Dashboard
                </Link>
                <li
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                  className="dropdown-item"
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <div className="d-flex gap-3">
              <Link to="/login">
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
          )}
        </div>
      </div>
    </nav>
  );
}
