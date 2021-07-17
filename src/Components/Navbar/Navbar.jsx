import { Link } from "react-router-dom";

// Child components
import Authentication from "../Authentication/Authentication";

// CSS file
import "./Navbar.css";

import ToggleButton from "../ToggleButton/ToggleButton";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          CHCCC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link active" aria-current="page" href="#">
                  Home
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <div className="nav-link active" aria-current="page" href="#">
                  About
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/worship">
                <div className="nav-link active" aria-current="page" href="#">
                  Worship
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sermons">
                <div className="nav-link active" aria-current="page" href="#">
                  Sermons
                </div>
              </Link>
            </li>
            <ToggleButton />
            <li className="nav-item">
              <a
                className="btn rounded-pill btn-primary"
                aria-current="page"
                href="#"
              >
                Donate to our church
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              {/* <Authentication
                isModerator={props.isModerator}
                setIsModerator={props.setIsModerator}
                modName={props.modName}
                setModName={props.setModName}
                saveChanges={props.handleSavingEdits}
              /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
