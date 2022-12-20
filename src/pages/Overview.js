import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnly from "../components/readOnly";
import { deleteLog, setEdit } from "../features/log/logSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";

const Overview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.log.value);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 7;
  const currentItems =
    data && data.length > 0 ? data.slice(itemOffset, endOffset) : [];
  const pageCount = data && data.length > 0 ? Math.ceil(data.length / 7) : 0;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 7) % data?.length;
    setItemOffset(newOffset);
  };
  const [logs, setLogs] = useState(currentItems);
  const taskId = localStorage.getItem("taskId");

  const [addFormData, setAddFormData] = useState({
    Name: "",
    Task: "",
    timeStart: "",
    timeEnd: "",
    Manager: "",
  });
  const [editLogId, setEditLogID] = useState(null);
  const [editFormData, setEditFormData] = useState({
    Name: "",
    Task: "",
    timeStart: "",
    timeEnd: "",
    Manager: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("Name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newLog = {
      id: nanoid(),
      Name: addFormData.Name,
      Task: addFormData.Task,
      timeStart: addFormData.timeStart,
      timeEnd: addFormData.timeEnd,
      Manager: addFormData.Manager,
    };

    const newlogs = [...logs, newLog];
    setLogs(newlogs);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedLog = {
      id: editLogId,
      Name: editFormData.Name,
      Task: editFormData.Task,
      timeStart: editFormData.timeStart,
      timeEnd: editFormData.timeEnd,
      Manager: editFormData.Manager,
    };
    const newLogs = [...logs];

    const index = logs.findIndex((log) => log.ID === editLogId);
    newLogs[index] = editedLog;
    setLogs(newLogs);
    setEditLogID(null);
  };

  const handleEditClick = (event, log) => {
    /*
        This should eventually create a popup userform
        */
    event.preventDefault();
    setEditLogID(log.ID);

    const formValues = {
      Name: log.Name,
      Task: log.Task,
      timeStart: log.timeStart,
      timeEnd: log.timeEnd,
      Manager: log.Manager,
    };

    dispatch(setEdit(log.ID));
    navigate("/NewRecord");
    setEditFormData(formValues); /*No longer needed with new edit method*/
  };

  const handleCancelClick = () => {
    setEditLogID(null);
  };

  const handleDeleteClick = (logID) => {
    dispatch(deleteLog(logID));
  };

  const currentUser = useSelector((state) => state.user.value);

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <div className="app-container">
          <p>
            <em>Viewing as {currentUser}</em>
          </p>
          <h3>Add a Log</h3>
          <form onSubmit={handleAddFormSubmit} className="form-control">
            <div className="row">
              <div className="col-2">
                {" "}
                <input
                  type="text"
                  name="Name"
                  required="required"
                  className="form-control"
                  placeholder="Enter a name...."
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-2">
                <input
                  type="float"
                  name="Task"
                  required="required"
                  placeholder="Enter Task number"
                  className="form-control"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-2">
                {" "}
                <input
                  type="text"
                  name="timeStart"
                  required="required"
                  placeholder="Enter start time"
                  className="form-control"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-2">
                {" "}
                <input
                  type="text"
                  name="timeEnd"
                  required="required"
                  placeholder="Enter end time"
                  className="form-control"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-2">
                {" "}
                <input
                  type="text"
                  name="Manager"
                  required="required"
                  placeholder="Enter managers name"
                  className="form-control"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-success">
                  Add Log
                </button>
              </div>
            </div>
          </form>
          <form onSubmit={handleEditFormSubmit}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Task</th>
                  <th>Time Start</th>
                  <th>Time End</th>
                  <th>Manager</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((log, id) => (
                  <ReadOnly
                    log={log}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    taskId={taskId}
                    key={id}
                  />
                ))}
              </tbody>
            </table>
            {data && data.length > 0 && (
              <ReactPaginate
                breakLabel="..."
                nextLabel={<Button variant="success">Next</Button>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<Button variant="danger">Previous</Button>}
                renderOnZeroPageCount={null}
                className="paginate"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overview;
