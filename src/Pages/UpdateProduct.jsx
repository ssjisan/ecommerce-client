import { useEffect, useState } from "react";
import AdminNavbar from "../Components/Navbar/AdminNavbar";
import axios from "axios";
import toast from "react-hot-toast";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");

  const params = useParams();

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    loadProduct();
  }, []);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`/product/${params.slug}`);
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setCategory(data?.category?._id);
      setQuantity(data.quantity);
      setImage(data.image);
      setId(data._id);
    } catch (err) {
      toast.error(err.message);
    }
  };
  console.log(image);
  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      if (data?.error) {
        toast.error(data.error);
      } else {
        setCategories(data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      image && productData.append("image", image);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("category", category);
      productData.append("price", price);
      productData.append("quantity", quantity);
      const { data } = await axios.put(`/product/${id}`, productData);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Updated");
        navigate("/admin-dashboard/products");
        window.location.reload()
      }
    } catch (err) {
      toast.error("Product creation failed, check all fields");
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <div className="row" style={{ marginTop: "64px" }}>
          <h4 style={{ fontWeight: 700, marginBottom: "24px" }}>
            Update Product
          </h4>
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Write a name</label>
              <input
                id="name"
                type="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Write a description</label>
              <textarea
                id="description"
                name="description"
                type="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                cols="12"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                id="price"
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column mb-3">
              <label className="form-label">Select Category</label>
              <Select
                showSearch
                size="large"
                placeholder="Select a category"
                optionFilterProp="children"
                onChange={(value) => setCategory(value)}
                value={category}
                // onSearch={onSearch}
                filterOption={filterOption}
                options={categories.map((category) => ({
                  value: category._id,
                  label: category.name,
                }))}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                id="quantity"
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-success" onClick={handleCreate}>
                Update
              </button>
            </div>
          </div>
          <div className="col">
            {image ? (
              <div style={{ height: "324px" }}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div style={{ height: "324px" }}>
                <img
                // eslint-disable-next-line
                  src={`${process.env.REACT_APP_SERVER_API}/product/image/${id}?${new Date().getTime()}`}
                  alt={name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            <div className="pt-2 d-flex gap-3">
              <label className="btn btn-outline-primary">
                 Update
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  hidden
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
