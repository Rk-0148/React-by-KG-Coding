export default function AddTask() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row rk-row mt-2">
          <div className="col-5">
            <input type="text" placeholder="enter todo here" />
          </div>
          <div className="col-5">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success rk-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
