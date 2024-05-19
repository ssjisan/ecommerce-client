import { createContext } from "react";
import PropTypes from "prop-types";
import AuthProvider from "./Components/AuthProvider";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const {     auth,setAuth  } = AuthProvider();
  return (
    <DataContext.Provider
      value={{
        // Authentication from AuthProvider
        auth,setAuth,
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
