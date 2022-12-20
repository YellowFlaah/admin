import { useState } from "react";
import DatePicker /*,  {setDefaultLocale}  */ from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Task(props) {
  const { addTask, deleteTask, task } = props;
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [subTaskId, setSubTaskId] = useState(null);
  const [subTaskTitle, setSubTaskTitle] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (collapsed) {
      setCollapsed(false);
    } else {
      let newTask = {
        id: task.id,
        taskId: subTaskId,
        title: subTaskTitle,
        isCollapsed: true,
        status: "tasks",
      };
      addTask(newTask);
      setCollapsed(true);
    }
  }

  return (
    <div className="row">
      <div className="col-3">
        <input
          type="text"
          className="form-control"
          name="id"
          placeholder="Enter id"
          disabled={collapsed}
          defaultValue={task.taskId}
          onChange={(e) => setSubTaskId(e.target.value)}
        />{" "}
      </div>
      <div className="col-3">
        {" "}
        <input
          type="text"
          className="form-control"
          name="id"
          placeholder="Enter task"
          disabled={collapsed}
          defaultValue={task.title}
          onChange={(e) => setSubTaskTitle(e.target.value)}
        />
      </div>
      <div className="col-3">
        {!collapsed && (
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="btn btn-success"
            type="submit"
          >
            Save
          </button>
        )}
        {collapsed && (
          <button
            onClick={(e) => {
              deleteTask(task.id, e);
            }}
            className="btn btn-danger"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}
