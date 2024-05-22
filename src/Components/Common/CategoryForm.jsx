import PropTypes from "prop-types";

export default function CategoryForm({ handleSubmit, value, setValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Create Category</label>
        <input
          id="name"
          type="name"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

CategoryForm.propTypes = {
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.string,
};
