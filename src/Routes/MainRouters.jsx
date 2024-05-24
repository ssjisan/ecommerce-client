import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import UserDashboard from "../Pages/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import SecretPage from "../Pages/SecretPage";
import AdminDashboard from "../Pages/AdminDashboard";
import Category from "../Pages/Category";
import Product from "../Pages/Product";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";

export default function MainRouters() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<Register />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/category" element={<Category />} />
          <Route path="/admin-dashboard/products" element={<Product />} />
          <Route path="/admin-dashboard/add-product" element={<AddProduct />} />
          <Route path="/admin-dashboard/product/:slug" element={<UpdateProduct />} />
          <Route path="/secret" element={<SecretPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} replace />
      </Routes>
    </>
  );
}
