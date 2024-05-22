import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesHandler() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveConfirmationModalOpen, setIsRemoveConfirmationModalOpen] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showRemoveModal = () => {
    setIsRemoveConfirmationModalOpen(true);
  };

  const handleRemoveModalCancel = () => {
    setIsRemoveConfirmationModalOpen(false);
  };

  // Load Category
  useEffect(() => {
    loadCategories();
  }, []);

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

  // Category Create
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/category", {
        name,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.name} as category create`);
        loadCategories();
        setName("");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Name Update for Category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/category/${selectedCategory._id}`, {
        name: updateName,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.name} as category create`);
        loadCategories();
        setUpdateName("");
        handleCancel();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Remove Category
  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/category/${selectedCategory._id}`);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Deleted");
        loadCategories();
        setIsRemoveConfirmationModalOpen(false);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return {
    handleSubmit,
    name,
    setName,
    categories,
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    updateName,
    setUpdateName,
    selectedCategory,
    setSelectedCategory,
    handleUpdate,
    isRemoveConfirmationModalOpen,
    showRemoveModal,
    handleRemoveModalCancel,
    handleRemove,
  };
}
