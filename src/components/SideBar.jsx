import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <div
        className="flex-column flex-shrink-0 p-3 text-white bg-success d-lg-block d-sm-none d-md-none d-none"
        style={{ maxHeight: "100vh", minHeight: "100vh", width: "400px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">P4 Table</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {/* <li className="nav-item">
            <Link
              to={"/"}
              className={pathname === "/" ? "nav-link active" : "nav-link"}
              aria-current="page"
            >
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to={"/plan"}
              className={pathname === "/plan" ? "nav-link active text-white" : "nav-link text-white"}
              aria-current="page"
            >
              Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/log"}
              className={
                pathname === "/log" || pathname === "/NewRecord"
                  ? "nav-link active text-white"
                  : "nav-link text-white"
              }
              aria-current="page"
            >
              Log
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/overview"}
              className={
                pathname === "/overview" ? "nav-link active text-white" : "nav-link text-white"
              }
              aria-current="page"
            >
              Overview
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SideBar;
