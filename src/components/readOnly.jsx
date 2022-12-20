import { Link } from "react-router-dom";
import moment from "moment/moment";

const ReadOnly = ({ log, handleEditClick, handleDeleteClick, taskId }) => {
  return (
    <tr>
      <td>{log.Name}</td>
      {taskId === log.Task ? (
        <td style={{ backgroundColor: "yellow" }}>{log.Task}</td>
      ) : (
        <td>{log.Task}</td>
      )}

      <td>{moment(log.timeStart).format("LLLL")}</td>
      <td>{moment(log.timeEnd).format("LLLL")}</td>
      <td>{log.Manager}</td>
      <td>
        <Link to="/NewRecord">
          <button
            type="button"
            className="btn btn-warning action-button"
            onClick={(event) => handleEditClick(event, log)}
          >
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteClick(log.ID)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
