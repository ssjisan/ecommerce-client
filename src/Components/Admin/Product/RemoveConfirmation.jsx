import { Modal } from "antd";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function RemoveConfirmation() {
  const {
    isRemoveConfirmationModalOpen,
    handleRemoveModalCancel,
    handleRemove,
  } = useContext(DataContext);
  return (
    <Modal
      title="Confirmation"
      open={isRemoveConfirmationModalOpen}
      onCancel={handleRemoveModalCancel}
      footer={null}
    >
      <div className="d-flex flex-column gap-5">
        <h3 style={{textAlign:"center"}}>Are you sure ?</h3>
        <div className="d-flex gap-3 justify-content-end">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={handleRemove}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
}
