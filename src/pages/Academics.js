import { connect } from "react-redux";
import {
  addAcademic,
  controlForm,
  editAcad,
  updateAcad,
} from "../store/academic";

function Academics({
  addAcademic,
  academic,
  openForm,
  controlForm,
  mehtod,
  editAcademic,
  editAcad,
  updateAcad,
}) {
  function submitData(e) {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value) {
      if (mehtod === "ADD") {
        let data = {
          id: academic.length + 1,
          position: e.target[0].value,
          bonus: e.target[1].value,
        };
        addAcademic(data);
        e.target.reset();
      } else if (mehtod === "Update") {
        let edit = academic.map((el) => 
          el.id == editAcademic.id
            ? {
                id: el.id,
                position: e.target[0].value,
                bonus: e.target[1].value,
              }
            : el
        );
        updateAcad(edit);
      }
    }
  }

  function editData(id) {
    const data = academic.filter((ac) => ac.id == id);
    editAcad(data[0]);
  }

  return (
    <div className="card">
      <div className="card-header ">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Academic degree</h1>
          <button
            className="btn btn-primary"
            onClick={() => controlForm(openForm)}
          >
            {openForm ? "Cancel" : "Add +"}
          </button>
        </div>
      </div>
      <div className="card-body row">
        <div className={openForm ? "col-9" : "col-12"}>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Position</th>
                <th>Bonus</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {academic.map((acad, i) => (
                <tr key={i}>
                  <td>{acad.id}</td>
                  <td>{acad.position}</td>
                  <td>{acad.bonus}</td>
                  <td className="d-flex gap-2 ">
                    <button
                      onClick={() => editData(acad.id)}
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form
          onSubmit={submitData}
          className={openForm ? "col-3 shadow p-3 rounded-4" : "d-none"}
        >
          <input
            type="text"
            defaultValue={mehtod === "Update" ? editAcademic.position : ""}
            className="form-control mt-2"
            placeholder="Position"
          />
          <input
            type="text"
            defaultValue={mehtod === "Update" ? editAcademic.bonus : ""}
            className="form-control mt-2"
            placeholder="Bonus"
          />
          <div className="d-flex justify-content-end gap-2 mt-2">
            <button
              onClick={() => controlForm(openForm)}
              type="button"
              className="btn btn-warning"
            >
              Close
            </button>
            <button className="btn btn-success">{mehtod}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(
  ({ academic: { academic, openForm, mehtod, editAcademic } }) => ({
    academic,
    openForm,
    mehtod,
    editAcademic,
  }),
  { addAcademic, controlForm, editAcad, updateAcad }
)(Academics);
