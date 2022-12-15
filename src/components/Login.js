import React from "react";
import { Link } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
function Login() {
  return (
    <div>
      <>
        <Leftsidebar />
        <div className="vh-100 d-flex justify-content-center align-items-center ">
          <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white" >
            <h2
              className="text-center mb-4 "
              style={{ color: "rgb(108, 93, 211)" }}
            >
              Login
            </h2>
            <form>
              <div className="mb-3 text-center">
                <label htmlFor="exampleInputEmail1" className="form-label ">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control border border-primary"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group form-check text-center">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  Accept Terms and Conditions
                </label>
              </div>

              {/* <Link className="d-grid"> */}
              <div class="col-md-12 text-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ backgroundColor: "#6c5dd3" }}
                >
                  Login
                </button>
              </div>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Login;
