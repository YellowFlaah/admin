import { useDispatch } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import SideBar from "../components/SideBar.jsx";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const router = useNavigate();

  const options = [
    { value: "admin", label: "Admin" },
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" },
  ];

  const onChangeValue = (option) => {
    dispatch(selectUser(option.target.value));
    router("/log");
  };

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-5 pt-5">
        <div className="Home">
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            onChange={(e) => onChangeValue(e)}
          >
            <option>Select User</option>
            {options.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Form.Select>
        </div>
      </div>
    </div>
  );
}
