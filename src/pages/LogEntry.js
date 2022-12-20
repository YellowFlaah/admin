import { useState } from "react";
import DatePicker /*,  {setDefaultLocale}  */ from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addLog, clearEdit, editLog } from "../features/log/logSlice";
import SideBar from "../components/SideBar.jsx";
//import {formatInTimeZone, getTimezoneOffset} from "date-fns-tz";

const LogEntry = () => {
  const data = useSelector((state) => state.log.value);
  const [logs, setLogs] = useState(data);

  let editedRecord = null;
  const editIdentifier = (frame) => {
    frame.map((el) =>
      el.Edit === "Y" ? (editedRecord = el) : (editedRecord = editedRecord)
    );
    return editedRecord;
  };
  editedRecord = editIdentifier(logs);

  const [name, setName] = useState(
    editedRecord === null ? undefined : editedRecord.Name
  );
  const [taskID, setTaskID] = useState(
    editedRecord === null ? undefined : editedRecord.Task
  );

  const firstDate =
    editedRecord === null
      ? new Date()
      : new Date(
          editedRecord.timeStart.substring(6, 10) +
            "-" +
            editedRecord.timeStart.substring(3, 5) +
            "-" +
            editedRecord.timeStart.substring(0, 2) +
            editedRecord.timeStart.substring(10, 16)
        );
  const secondDate =
    editedRecord === null
      ? new Date()
      : new Date(
          editedRecord.timeEnd.substring(6, 10) +
            "-" +
            editedRecord.timeEnd.substring(3, 5) +
            "-" +
            editedRecord.timeEnd.substring(0, 2) +
            editedRecord.timeEnd.substring(10, 16)
        );
  const [startDate, setStartDate] = useState(firstDate);
  const [endDate, setEndDate] = useState(secondDate);
  // const [duration,setDuration] = useState(undefined);
  const [manager, setManager] = useState(
    editedRecord === null ? undefined : editedRecord.Manager
  );
  // const [comments,setComments] = useState(editedRecord===null ? undefined : editedRecord.ID);

  /* Note that the above state variables are unnecessary as the values of inputs are called directly in handleSumbit.
            The setState functions have accordingly been removed, with the exception of date values 
            (use of DatePicker seems to necessitate a state variable)
    */

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    navigate(-1);
    event.preventDefault();
    localStorage.setItem("taskId", taskID);
    const dataInput = {
      id: nanoid(),
      Name: document.getElementById("nameID").value,
      Task: document.getElementById("taskID").value,
      timeStart: document.getElementById("startID").value,
      timeEnd: document.getElementById("endID").value,
      Manager: document.getElementById("managerID").value,
    };

    if (editedRecord === null) {
      dispatch(addLog(dataInput));
    } else {
      dispatch(editLog(dataInput));
      dispatch(clearEdit());
    }
  };

  function handleCancel(event) {
    navigate(-1);
    event.preventDefault();
    dispatch(clearEdit());
  }

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-5 pt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-col">
            <div className="form-row">
              <div>
                {" "}
                <label> Name </label>{" "}
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={name}
                placeholder="Name"
                id="nameID"
                required
              ></input>
            </div>
            <div className="form-row">
              <div>
                {" "}
                <label className="time-form-lab"> Task ID </label>{" "}
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={taskID}
                placeholder="Task ID"
                id="taskID"
                required
              ></input>
            </div>
            <div className="form-row">
              <label className="time-form-lab"> Start </label>
              <DatePicker
                showTimeSelect
                timeIntervals={15}
                selected={startDate}
                className="form-control"
                id="startID"
                onChange={(date) => setStartDate(date)}
                timeFormat="HH:mm"
                dateFormat="dd/MM/yyyy HH:mm"
                required
              />
            </div>
            <div className="form-row">
              <div>
                {" "}
                <label className="time-form-lab"> End </label>{" "}
              </div>
              <DatePicker
                showTimeSelect
                timeIntervals={15}
                selected={endDate}
                id="endID"
                className="form-control"
                onChange={(date) => setEndDate(date)}
                timeFormat="HH:mm"
                dateFormat="dd/MM/yyyy HH:mm"
                required
              />
            </div>
            {/* <div className="form-row">
                <div> <label className="time-form-lab"> Duration</label> </div>
                <input type="number" className="form-input" step="0.25" min={0} placeholder={0} required ></input>
            </div> ----- disabled the duration box as we now assume start and end are on same date*/}
            <div className="form-row">
              <div>
                {" "}
                <label className="time-form-lab"> Manager </label>{" "}
              </div>
              <input
                type="text"
                className="form-control"
                defaultValue={manager}
                placeholder="Manager"
                id="managerID"
                required
              ></input>
            </div>
            <div className="form-row">
              <div>
                {" "}
                <label className="time-form-lab"> Comments</label>{" "}
              </div>
              <textarea className="form-control"></textarea>
            </div>
            <button
              id="form-cancel"
              onClick={handleCancel}
              className="btn btn-danger action-button"
            >
              Cancel
            </button>
            <button
              id="form-submit"
              type="submit"
              className="btn btn-success action-button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogEntry;
