import CategoryList from "../Components/Admin/Category/CategoryList";
import CreateCategory from "../Components/Admin/Category/CreateCategory";
import HeroSection from "../Components/Common/HeroSection";
import AdminNavbar from "../Components/Navbar/AdminNavbar";

export default function Category() {
  return (
    <div>
      <HeroSection title="Admin Dashboard" />
      <AdminNavbar />
      <div className="d-flex gap-5" style={{ marginLeft:"40px",marginTop: "64px" }}>
        <CreateCategory/>
        <CategoryList />
      </div>
    </div>
  );
}
