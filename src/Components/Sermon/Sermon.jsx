import "./Sermon.css";

import { useState } from "react";
const Sermon = (props) => {
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  return (
    <>
      <div className="sermonCardContainer">
        <button
          type="button"
          className="btn sermonBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onMouseOver={() => setIsHoveredOver(true)}
        >
          <div className="card bg-light sermonCard" style={{ width: "18rem" }}>
            <p className="card-subtitle fw-light text-muted m-1 text-end">
              9/29/2019
            </p>
            <div className="card-body">
              <div>
                <h5 className="card-title fw-light fs-1">
                  Resurrection Beyond the Grave
                </h5>
                <p className="card-text fw-light fs-5 text-muted">
                  Bro. Josh Kim
                </p>
              </div>
            </div>
          </div>
        </button>
        {props.isModerator && (
          <>
            <div
              className={`container d-none ${
                isHoveredOver ? "modBlock" : "noModBlock"
              }`}
              onMouseLeave={() => setIsHoveredOver(false)}
            >
              <button className="btn rounded-pill btn-outline-light">
                Edit
              </button>
              <button
                className="btn rounded-pill btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                Delete
              </button>
            </div>

            <div
              className="modal fade"
              id="deleteModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="row modal-body ">
              <div className="col-8">
                <div className="fw-light fs-2">
                  Resurrection Beyond the Grave
                </div>
                <div className="fw-light text-muted fs-5">Bro. Josh Kim</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sermon;
