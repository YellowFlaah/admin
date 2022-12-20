import Table from "react-bootstrap/Table";
import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { copyData, deleteData, editData } from "../features/data/dataSlice";
import toast, { Toaster } from "react-hot-toast";
import { addData, deleteSelectedData } from "../features/data/selectedData";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-collapse";
import moment from "moment/moment";
import DatePicker from "react-datepicker";
import { nanoid } from "nanoid";
import "react-datepicker/dist/react-datepicker.css";
import Task from "./Task.jsx";

function DataTable({ data, selectAll }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const endOffset = itemOffset + 9;
  const [filteredData, setFilteredData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [duration, setDuration] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [person, setPerson] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [subTasks, setSubTasks] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);

  let taskList, tasksForStatus;
  let status = "tasks";

  const handleClose = () => {
    setShow(false);
    setEditStatus(false);
    localStorage.removeItem("tasks");
  };
  const handleShow = () => setShow(true);
  const currentItems =
    data && data.length > 0 ? data.slice(itemOffset, endOffset) : [];
  const pageCount = data && data.length > 0 ? Math.ceil(data.length / 9) : 0;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % data?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setFilteredData(data.filter((item) => item.id === selectedId));
    if (filteredData !== null && filteredData.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(filteredData[0].subTasks));
    }
    return () => {
      setFilteredData([]);
    };
  }, [selectedId, data]);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (dispatch(deleteData(id))) {
      toast.success("Successfully Deleted!");
    } else {
      toast.error("There is something wrong!");
    }
  };
  const handleCopy = (id) => {
    if (dispatch(copyData(id))) {
      toast.success("Successfully Copied!");
    } else {
      toast.error("There is something wrong!");
    }
  };

  const handleEdit = (id) => {
    let formData = {
      id: nanoid(),
      person: person == null ? filteredData[0].person : person,
      tasks: tasks == null ? filteredData[0].tasks : tasks,
      startDate: startDate == null ? filteredData[0].startDate : startDate,
      endDate: endDate == null ? filteredData[0].endDate : endDate,
      subTasks: JSON.parse(localStorage.getItem("tasks")),
      duration: duration == null ? filteredData[0].duration : duration,
      hours: hours == null ? filteredData[0].hours : hours,
      mins: mins == null ? filteredData[0].mins : mins,
    };
    const formatedData = {
      id: id,
      data: formData,
    };
    dispatch(editData(formatedData));
    localStorage.removeItem("tasks");
    handleClose();
  };

  function handleAddEmpty(e) {
    e.preventDefault();
    addEmptyTask();
  }
  function addEmptyTask() {
    const lastTask = subTasks[subTasks.length - 1];
    let newTaskId = 1;
    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }
    setSubTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        taskId: "",
        title: "",
        status: "tasks",
      },
    ]);
  }
  function addTask(taskToAdd) {
    let filteredTasks = subTasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });
    let newTaskList = [...filteredTasks, taskToAdd];
    setSubTasks(newTaskList);
    saveTasksToLocalStorage(newTaskList);
  }
  function deleteTask(taskId, e) {
    e.preventDefault();
    let filteredTasks = subTasks.filter((task) => {
      return task.id !== taskId;
    });
    setSubTasks(filteredTasks);
    saveTasksToLocalStorage(filteredTasks);
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    let loadedTasks = localStorage.getItem("tasks");

    let subTasks = JSON.parse(loadedTasks);
    if (subTasks) {
      setSubTasks(subTasks);
    } else {
    }
  }
  if (subTasks) {
    tasksForStatus = subTasks.filter((task) => {
      return task.status === status;
    });
  }
  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id, e) => deleteTask(id, e)}
          key={task.id}
          task={task}
        />
      );
    });
  }
  useEffect(() => {
    loadTasksFromLocalStorage();
  }, [selectedId]);

  const getDuration = () => {
    const now = moment(new Date(startDate));
    const end = moment(new Date(endDate));
    var diff = moment.duration(moment(end).diff(moment(now)));
    var days = parseInt(diff.asDays());
    var hours = parseInt(diff.asHours()) - days * 24;
    var minutes = parseInt(diff.asMinutes()) - (days * 24 * 60 + hours * 60);
    // console.log(days + " days, " + hours + ", " + minutes);
    setHours(hours);
    setMins(minutes);
    setDuration(days);
  };

  useEffect(() => {
    getDuration();
    return () => {};
  }, [startDate, endDate, duration, hours, mins]);

  return (
    <>
      <Toaster />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Card>
            <Card.Body>
              {filteredData && filteredData.length > 0 && (
                <form>
                  <div className="form-group">
                    <label> Person Name</label>
                    <input
                      className="form-control"
                      defaultValue={filteredData[0].person}
                      onChange={(e) => setPerson(e.target.value)}
                      readOnly={!editStatus}
                    />
                  </div>
                  <div className="form-group">
                    <label>Main Task</label>
                    <input
                      className="form-control"
                      defaultValue={filteredData[0].tasks}
                      onClick={() => setOpen(!open)}
                      onChange={(e) => setTasks(e.target.value)}
                      readOnly={!editStatus}
                    />
                  </div>
                  {editStatus ? (
                    <div className="row mb-3">
                      <label htmlFor="inputText">Sub Tasks</label>
                      <div className="col-sm-12">
                        {taskList}
                        <button
                          onClick={handleAddEmpty}
                          className="btn btn-primary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {" "}
                      {filteredData[0].subTasks !== null &&
                        filteredData[0].subTasks.length > 0 &&
                        filteredData[0].subTasks.map((item, i) => {
                          return (
                            <Collapse isOpened={open}>
                              <div className="row" key={i}>
                                <label>Sub Tasks</label>
                                <div className="col-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="id"
                                    placeholder="Enter id"
                                    defaultValue={item.taskId}
                                    readOnly={!editStatus}
                                  />{" "}
                                </div>
                                <div className="col-3">
                                  {" "}
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="id"
                                    placeholder="Enter task"
                                    defaultValue={item.title}
                                    readOnly={!editStatus}
                                  />
                                </div>
                              </div>
                            </Collapse>
                          );
                        })}
                    </>
                  )}

                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="inputDate">Start Date</label>
                      <DatePicker
                        showTimeSelect
                        timeIntervals={15}
                        selected={
                          startDate == null
                            ? new Date(filteredData[0].startDate)
                            : new Date(startDate)
                        }
                        className="form-control"
                        id="startID"
                        onChange={(date) => setStartDate(date)}
                        timeFormat="HH:mm"
                        dateFormat="dd/MM/yyyy HH:mm"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="inputTime">End Date</label>
                      <DatePicker
                        showTimeSelect
                        timeIntervals={15}
                        selected={
                          endDate == null
                            ? new Date(filteredData[0].endDate)
                            : new Date(endDate)
                        }
                        className="form-control"
                        id="startID"
                        onChange={(date) => {
                          setEndDate(date);
                          getDuration();
                        }}
                        timeFormat="HH:mm"
                        dateFormat="dd/MM/yyyy HH:mm"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Days</label>
                        <input
                          className="form-control"
                          value={
                            duration === null
                              ? filteredData[0].duration
                              : duration
                          }
                          readOnly
                        />
                      </div>
                    </div>{" "}
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Hours</label>
                        <input
                          className="form-control"
                          value={hours === null ? filteredData[0].hours : hours}
                          readOnly
                        />
                      </div>
                    </div>{" "}
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Mins</label>
                        <input
                          className="form-control"
                          value={mins === null ? filteredData[0].mins : mins}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  {editStatus && (
                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={() => handleEdit(selectedId)}
                    >
                      Submit
                    </button>
                  )}
                </form>
              )}
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <td>
              <strong>Person</strong>{" "}
            </td>
            <td>
              <strong>Task(High Level)</strong>{" "}
            </td>
            <td>
              <strong>Start Date</strong>{" "}
            </td>{" "}
            <td>
              <strong>End Date</strong>{" "}
            </td>
            <td>
              <strong>Duration</strong>{" "}
            </td>
            <td>
              <strong>Action</strong>{" "}
            </td>
          </tr>
        </thead>
        <tbody>
          {currentItems != null &&
            currentItems.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    {selectAll ? (
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        checked
                      />
                    ) : (
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        onChange={(event) => {
                          if (event.target.checked) {
                            dispatch(addData(item));
                          } else {
                            dispatch(deleteSelectedData(item.id));
                          }
                        }}
                      />
                    )}
                  </td>
                  <td>{item.person}</td>
                  <td>{item.tasks}</td>
                  <td>{moment(item.startDate).format("LLL")}</td>
                  <td>{moment(item.endDate).format("LLL")}</td>
                  <td>
                    {item.duration} Days : {item.hours} Hours : {item.mins} Mins
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success action-button"
                      onClick={() => {
                        setSelectedId(item.id);
                        setEditStatus(true);
                        handleShow();
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger action-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash-o"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-warning action-button"
                      onClick={() => handleCopy(item.id)}
                    >
                      <i className="fa fa-copy"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary action-button"
                      onClick={() => {
                        handleShow();
                        setSelectedId(item.id);
                      }}
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
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
    </>
  );
}

export default DataTable;
