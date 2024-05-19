import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataProcessing from "./DataProcessing/DataProcessing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProcessing>
      <App />
    </DataProcessing>
  </React.StrictMode>
);
