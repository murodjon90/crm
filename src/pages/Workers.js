import { connect } from "react-redux";
import {
  addWorker,
  controlForm,
  editWorker,
  updateData,
} from "../store/worker";

function Workers({
  controlForm,
  openForm,
  mehtod,
  workers,
  addWorker,
  editWorker,
  updateData,
  editWork
}) {
  
  function submitData(e) {
    e.preventDefault();
    if (mehtod == "ADD") {
      if (e.target[0].value && e.target[1].value) {
        let date = {
          id: workers.length + 1,
          name: e.target[0].value,
          last_name: e.target[1].value,
          phone: e.target[2].value,
          position: e.target[3].value,
          degree: e.target[4].value,
        };
        addWorker(date);
        e.target.reset();
      }
    }
  }

  function editData(id) {
    const data = workers.filter((w) => w.id == id);
    editWorker(data[0]);
  }
  
  function deleteData(id) {
    
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
                <th>Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Position</th>
                <th>Degree</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((el, i) => (
                <tr key={i}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.last_name}</td>
                  <td>{el.phone}</td>
                  <td>{el.position}</td>
                  <td>{el.degree}</td>
                  <td className="d-flex gap-2">
                    <button
                      onClick={() => editData(el.id)}
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(el.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
            defaultValue={mehtod=="Update"?editWork.name:""}
            type="text" 
            className="form-control mt-2" 
            placeholder="Name" />
          <input
            defaultValue={mehtod=="Update"?editWork.last_name:""}
            type="text"
            className="form-control mt-2"
            placeholder="Last Name"
          />
          <input
            defaultValue={mehtod=="Update"?editWork.phone:""}
            type="text"
            className="form-control mt-2"
            placeholder="Phone"
          />
          <select className="form-control mt-2">
            <option>Choose position</option>
            <option>Team Lead</option>
            <option>Full stack</option>
            <option>Developer</option>
          </select>
          <select className="form-control mt-2">
            <option>Choose Degree</option>
            <option>Strong Senior</option>
            <option>Senior</option>
            <option>Strong Middle</option>
            <option>Middle</option>
            <option>Strong Junior</option>
            <option>Junior</option>
            <option>Intermship</option>
          </select>
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
  ({ worker: { workers, openForm, mehtod, editWork } }) => ({
    workers,
    openForm,
    mehtod,
    editWork
  }),
  { addWorker, controlForm, editWorker, updateData }
)(Workers);
