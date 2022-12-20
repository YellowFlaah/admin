import toast, { Toaster } from "react-hot-toast";
import SideBar from "../components/SideBar.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LogPage = () => {
  const currentUser = useSelector((state) => state.user.value);
  return (
    <div className="row">
      <Toaster />
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <h1>Log</h1>
        <p>
          <em>Logged in as {currentUser}</em>
        </p>
        <h3>Please enter your hours by filling out the form.</h3>

        <div className="entryButton">
          <Link to="/NewRecord">
            <button className="btn btn-primary">Enter Hours</button>
          </Link>

          <button className="btn btn-secondary">Dummy push</button>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
