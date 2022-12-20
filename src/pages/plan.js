import DataTable from "../components/Table.jsx";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  copyData,
  deleteData,
  editAll,
} from "../features/data/dataSlice.js";
import SideBar from "../components/SideBar.jsx";
import { nanoid } from "nanoid";
import exportFromJSON from "export-from-json";
import toast, { Toaster } from "react-hot-toast";
import { deleteAll } from "../features/data/selectedData.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Task from "../components/Task.jsx";
import moment from "moment";

const PlanPage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  let taskList, tasksForStatus;
  const [filteredData, setFilteredData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const fileName = "download";
  const exportType = "xls";
  const selectedData = useSelector((state) => state.selectedData);
  const [duration, setDuration] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editTasks, setEditTasks] = useState(null);
  const [person, setPerson] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [formValue, setFormValue] = useState({
    persons: null,
    tasks: null,
    startDate: startDate,
    endDate: endDate,
    subTasks: JSON.stringify(localStorage.getItem("tasks")),
    duration: duration,
    mins: mins,
    hours: hours,
  });

  let status = "tasks";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = () => {
    if (selectedData.data.length < 1 && data.length < 1) {
      toast.error("Please select data");
    } else {
      setEditOpen(true);
    }
  };
  const handleEditClose = () => {
    localStorage.removeItem("tasks");
    setEditOpen(false);
  };

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const exportData = () => {
    exportFromJSON({ data, fileName, exportType });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const commaSeparatedPersons = formValue.persons.split(",");
    if (commaSeparatedPersons.length > 1) {
      commaSeparatedPersons.map((item) => {
        let formData = {
          id: nanoid(),
          person: item,
          tasks: formValue.tasks,
          startDate: startDate,
          endDate: endDate,
          subTasks: JSON.parse(localStorage.getItem("tasks")),
          duration: duration,
          mins: mins,
          hours: hours,
        };
        dispatch(addData(formData));
      });
      localStorage.removeItem("tasks");
      handleClose();
    } else {
      let formData = {
        id: nanoid(),
        person: formValue.persons,
        tasks: formValue.tasks,
        startDate: startDate,
        endDate: endDate,
        subTasks: JSON.parse(localStorage.getItem("tasks")),
        duration: duration,
        mins: mins,
        hours: hours,
      };
      dispatch(addData(formData));
      localStorage.removeItem("tasks");
      handleClose();
    }
  };
  function handleAddEmpty(e) {
    e.preventDefault();
    addEmptyTask();
  }
  function addEmptyTask() {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
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
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });
    let newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);

    saveTasksToLocalStorage(newTaskList);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);

    saveTasksToLocalStorage(filteredTasks);
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);
    if (tasks) {
      setTasks(tasks);
    } else {
    }
  }
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

  const handleDeleteAll = () => {
    if (selectedData.data.length > 0) {
      selectedData.data.map((item) => {
        dispatch(deleteData(item.id));
      });
      if (dispatch(deleteAll())) {
        setSelectAll(false);
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      data.map((item) => {
        dispatch(deleteData(item.id));
      });
      setSelectAll(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  const handleCopyAll = () => {
    if (selectedData.data.length > 0) {
      selectedData.data.map((item) => {
        dispatch(copyData(item.id));
      });
      if (dispatch(deleteAll())) {
        setSelectAll(false);
        window.location.reload();
      }
    } else {
      data.map((item) => {
        dispatch(copyData(item.id));
      });

      if (dispatch(deleteAll())) {
        setSelectAll(false);
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  const handleEditAll = (e) => {
    e.preventDefault();
    let formData = {
      id: nanoid(),
      person: person == null ? filteredData[0].person : person,
      tasks: editTasks == null ? filteredData[0].tasks : editTasks,
      startDate: startDate == null ? filteredData[0].startDate : startDate,
      endDate: endDate == null ? filteredData[0].endDate : endDate,
      subTasks: JSON.parse(localStorage.getItem("tasks")),
      duration: duration == null ? filteredData[0].duration : duration,
      hours: hours == null ? filteredData[0].hours : hours,
      mins: mins == null ? filteredData[0].mins : mins,
    };
    const ids = [];
    if (selectedData.data.length < 1) {
      data.map((id) => {
        ids.push(id);
      });
    } else {
      selectedData.data.map((id) => {
        ids.push(id);
      });
    }
    const formatedData = {
      ids: ids,
      data: formData,
    };
    if (dispatch(editAll(formatedData))) {
      localStorage.removeItem("tasks");
      dispatch(deleteAll());
      handleEditClose();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }
  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  useEffect(() => {
    setSelectedId(
      selectedData?.data.length < 1 ? data[0]?.id : selectedData.data[0].id
    );
    setFilteredData(data.filter((item) => item.id === selectedId));
    console.log(filteredData);
    if (filteredData !== null && filteredData.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(filteredData[0].subTasks));
    }
    return () => {
      setFilteredData([]);
    };
  }, [selectedId, data]);

  useEffect(() => {
    getDuration();
    return () => {};
  }, [startDate, endDate, duration, hours, mins]);

  return (
    <div className="row">
      <Toaster />
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <Modal show={editOpen} onHide={handleEditClose} size="lg">
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
                      />
                    </div>
                    <div className="form-group">
                      <label>Main Task</label>
                      <input
                        className="form-control"
                        defaultValue={filteredData[0].tasks}
                        onChange={(e) => setEditTasks(e.target.value)}
                      />
                    </div>

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
                          onChange={(date) => {
                            setStartDate(date);
                            getDuration();
                          }}
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
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            className="form-control"
                            value={
                              duration == null
                                ? filteredData[0].duration
                                : duration
                            }
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Hours</label>
                          <input
                            className="form-control"
                            value={
                              hours == null ? filteredData[0].hours : hours
                            }
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Mins</label>
                          <input
                            className="form-control"
                            value={mins == null ? filteredData[0].mins : mins}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={handleEditAll}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Body>
            <Card>
              <Card.Body>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="inputDate">Start Date</label>
                      <DatePicker
                        showTimeSelect
                        timeIntervals={15}
                        selected={new Date(startDate)}
                        className="form-control"
                        id="startID"
                        onChange={(date) => {
                          setStartDate(date);
                          getDuration();
                        }}
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
                        className="form-control"
                        selected={new Date(endDate)}
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
                    <label htmlFor="inputText">
                      Person (for multiple person use , (comma))
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="persons"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputText">Task(High Level)</label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="tasks"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
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

                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <label htmlFor="inputTime">Days</label>
                      <input
                        className="form-control"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        readOnly
                      />
                    </div>{" "}
                    <div className="col-sm-4">
                      <label htmlFor="inputTime">Hours</label>
                      <input
                        className="form-control"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        readOnly
                      />
                    </div>{" "}
                    <div className="col-sm-4">
                      <label htmlFor="inputTime">Mins</label>
                      <input
                        className="form-control"
                        value={mins}
                        onChange={(e) => setMins(e.target.value)}
                        readOnly
                      />
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="action-button"
                  >
                    Close
                  </Button>
                  <Button variant="success" type="submit">
                    Save Changes
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <div className="card align-content-center">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-3">
                    <Button variant="success" onClick={exportData}>
                      Download
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-6" style={{ marginLeft: "auto" }}>
                <Button
                  variant="dark"
                  className="action-button"
                  onClick={handleShow}
                >
                  New
                </Button>
                <Button
                  variant="warning"
                  className="action-button"
                  onClick={handleEditShow}
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  className="action-button"
                  onClick={() => setSelectAll(!selectAll)}
                >
                  {selectAll ? "UnSelect All" : "Select All"}
                </Button>
                <Button
                  variant="danger"
                  className="action-button"
                  onClick={handleDeleteAll}
                >
                  Delete All
                </Button>
                <Button
                  variant="warning"
                  className="action-button"
                  onClick={handleCopyAll}
                >
                  Copy All
                </Button>
              </div>
            </div>
          </div>
          <DataTable data={data} selectAll={selectAll} />
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
