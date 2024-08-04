import PropTypes from "prop-types";
export default function ShowTask({ TaskName, TaskDate }) {
  return (
    <>
      <div className="container mt-4">
        <div className="row rk-row mt-2">
          <div className="col-5">{TaskName}</div>
          <div className="col-5">{TaskDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger rk-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ShowTask.propTypes = {
  TaskName: PropTypes.string.isRequired,
  TaskDate: PropTypes.string.isRequired,
};
