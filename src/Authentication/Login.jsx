import axios from "axios";
import HeroSection from "../Components/Common/HeroSection";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DataContext } from "../DataProcessing/DataProcessing";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("isChecked") === "true"
  );
  const { auth, setAuth } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        if (rememberMe) {
          localStorage.setItem("email", email); // Store email in local storage
          localStorage.setItem("password", password); // Store password in local storage (not secure)
          localStorage.setItem("isChecked", rememberMe); // Store password in local storage (not secure)
        }
        if (!rememberMe) {
          localStorage.removeItem("email", email); // Store email in local storage
          localStorage.removeItem("password", password); // Store password in local storage (not secure)
          localStorage.removeItem("isChecked", rememberMe); // Store password in local storage (not secure)
        }
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login Successful");
        navigate(
          location.state ||
            `${data?.user?.role === 1 ? "/admin-dashboard" : "/user-dashboard"}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <HeroSection title="Login" />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
