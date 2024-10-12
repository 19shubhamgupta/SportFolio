import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({tabValue}) => {
  const tabs = tabValue;
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", minHeight: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">SportFolio</span>
      </a>

      {/* Centering content vertically */}
      <div
        className="d-flex flex-column justify-content-center"
        style={{ flexGrow: 1, marginTop: "10vh" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          {tabs.map((tab, index) => (
            <li className="nav-item" key={index}>
              <Link to = {`${tab.slug}`} className="nav-link text-white fs-5" aria-current="page">
                <i className={`bi ${tab.icon} me-3`}></i>
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
