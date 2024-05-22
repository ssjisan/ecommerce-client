import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="container d-flex justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <Link
            className={`${
              path === "/admin-dashboard/category" ? "nav-link  active" : "nav-link "
            }`}
            aria-current="page"
            to="/admin-dashboard/category"
          >
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link
             className={`${
                path === "/admin-dashboard/products" ? "nav-link  active" : "nav-link "
            }`}
            aria-current="page"
            to="/admin-dashboard/products"
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}
