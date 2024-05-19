import axios from "axios";
import HeroSection from "../Components/Common/HeroSection";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(DataContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        // eslint-disable-next-line
        `${process.env.REACT_APP_SERVER_API}/register`,
        {
          name,
          email,
          password,
        }
      );
      if (data?.error) {

        toast.error(data.error);
      } else {
        localStorage.setItem("auth",JSON.stringify(data))
        setAuth({...auth,token:data.token, user:data.token})
        toast.success("Registration Successful");
      }
      console.log(data.error);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <HeroSection title="Register" />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
