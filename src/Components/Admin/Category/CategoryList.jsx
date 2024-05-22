import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
import UpdateCategory from "./UpdateCategory";
import RemoveConfirmation from "./RemoveConfirmation";

export default function CategoryList() {
  const {
    categories,
    showModal,
    setSelectedCategory,
    setUpdateName,
    showRemoveModal,
  } = useContext(DataContext);

  return (
    <div style={{ maxWidth: "460px", width: "100%" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((data, i) => {
            return (
              <tr key={data._id}>
                <th scope="row">{i + 1}</th>
                <td>{data.name}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-warning dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        onClick={() => {
                          showModal();
                          setSelectedCategory(data);
                          setUpdateName(data.name);
                        }}
                      >
                        <a className="dropdown-item">Edit</a>
                      </li>
                      <li
                        onClick={() => {
                          showRemoveModal()
                          setSelectedCategory(data);
                        }}
                      >
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <UpdateCategory />
      <RemoveConfirmation />
    </div>
  );
}
