import { Modal } from "antd";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function UpdateCategory() {
  const { isModalOpen, handleOk, handleCancel ,updateName,setUpdateName,handleUpdate} = useContext(DataContext);
  return (
    <Modal
      title="Update Category"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <form onSubmit={handleUpdate}>
        <div className="mt-3 mb-3">
          <label className="form-label">Category Name</label>
          <input
            id="name"
            type="name"
            className="form-control"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </Modal>
  );
}
