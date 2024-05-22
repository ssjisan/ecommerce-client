import { createContext } from "react";
import PropTypes from "prop-types";
import AuthProvider from "./Components/AuthProvider";
import axios from "axios";
import CategoriesHandler from "./Components/CategoriesHandler";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const { auth, setAuth } = AuthProvider();
  const {
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
    showRemoveModal,
    isRemoveConfirmationModalOpen,
    handleRemoveModalCancel,
    handleRemove
  } = CategoriesHandler();

  // Axios Configuration
  // eslint-disable-next-line
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  axios.defaults.headers.common["Authorization"] = auth?.token;

  return (
    <DataContext.Provider
      value={{
        // Authentication from AuthProvider
        auth,
        setAuth,
        // Categories Handler
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
        showRemoveModal,
        isRemoveConfirmationModalOpen,
        handleRemoveModalCancel,
        handleRemove
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
