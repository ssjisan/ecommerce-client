import { useEffect, useState } from "react";
import AdminNavbar from "../Components/Navbar/AdminNavbar";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (err) {
      toast.error("Some problems here, try again");
    }
  };
const removeProduct = async (id)=>{
  try{
    const {data} = await axios.delete(`/product/${id}`)
    toast.success("Deleted")
    window.location.reload()
  }
  catch(err){
    console.log(err);
    toast.error("Cant Delete right now.")
  }
}
  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <div className="row" style={{ marginTop: "64px" }}>
          {products.map((data) => {
            return (
              <div className="col-md-3" key={data._id}>
                <div
                  className="card"
                  style={{ width: "100%", padding: "16px" }}
                >
                  <div style={{ width: "100%", height: "280px" }}>
                    <img
                      // eslint-disable-next-line
                      src={`${process.env.REACT_APP_SERVER_API}/product/image/${data._id}`}
                      alt={data.name}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <p className="card-text">${data.price}</p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center">
                    {" "}
                    <Link to={`/admin-dashboard/product/${data.slug}`}>
                    <button className="btn btn-outline-secondary">
                      Update
                    </button>
                    </Link>
                    <button className="btn btn-danger" onClick={()=>removeProduct(data._id)}>Delete</button>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {products.length}
    </div>
  );
}
