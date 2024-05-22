import { DataContext } from "../../../DataProcessing/DataProcessing";
import { useContext } from "react";

export default function CreateCategory() {
  const { name, setName, handleSubmit } = useContext(DataContext);
  return (
    <div style={{ maxWidth: "460px", width: "100%" }} className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            id="name"
            type="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
