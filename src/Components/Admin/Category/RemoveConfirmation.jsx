import { Modal } from "antd";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function RemoveConfirmation() {
  const { isRemoveConfirmationModalOpen, handleRemoveModalCancel, updateName, handleRemove } =
    useContext(DataContext);
  return (
    <Modal
      title="Confirmation"
      open={isRemoveConfirmationModalOpen}
      onCancel={handleRemoveModalCancel}
      footer={null}
    >
      <div className="d-flex flex-column gap-5">
      <h3>Remove {updateName} ! Are you sure ?</h3>
      <button type="submit" className="btn btn-success" onClick={handleRemove}>
        Update
      </button>
      </div>
    </Modal>
  );
}
