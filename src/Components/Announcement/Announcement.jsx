import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./Announcement.css";

import pencil from "../../Images/pencil-square.svg";
const Announcement = (props) => {
  const [announcementDesc, setAnnouncementDesc] = useState("");
  const handleAnnouncementSubmit = () => {
    {
    }
  };
  return (
    <>
      <section>
        <div className="card announcementCard">
          <div className="card-body">
            <div className="cardHeader">
              <div className="modAnnouncementNameContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <p>{props.modName || "mod name here"}</p>
              </div>
              <p>{props.announcementDate || "12/12/12"}</p>
            </div>
            <MDEditor.Markdown source={props.announcementBody} />
            {props.isModerator && (
              <>
                <button
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#editAnnouncementModal"
                >
                  <img
                    src={pencil}
                    data-bs-toggle="tooltip"
                    title="edit announcement"
                    alt="a pencil icon"
                  />
                </button>

                <div
                  className="modal fade"
                  id="editAnnouncementModal"
                  tabindex="-1"
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
                      <div className="modal-body">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleAnnouncementSubmit();
                          }}
                        >
                          <label htmlFor="announcementDesc">Description</label>
                          <textarea
                            id="announcementDesc"
                            name="announcementDesc"
                            onChange={(e) =>
                              setAnnouncementDesc(e.target.value)
                            }
                          ></textarea>
                          <button type="submit" className="btn btn-primary">
                            Save changes
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
