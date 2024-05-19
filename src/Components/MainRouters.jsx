import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Navbar from "./Navbar/Navbar";

export default function MainRouters() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<Register />} />
      </Routes>
    </>
  );
}
