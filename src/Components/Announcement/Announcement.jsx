import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./Announcement.css";

const Announcement = (props) => {
  const [announcementDesc, setAnnouncementDesc] = useState("");
  const handleAnnouncementSubmit = () => {
    {
    }
  };
  return (
    <>
      <section>
        <div className="card announcementCard border-0 border-top text-start">
          <div className="card-header cardHeader">
            <div className="modAnnouncementNameContainer">
              <div
                className="editedByContainer"
                data-bs-toggle="tooltip"
                title="last edited by"
              >
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
            </div>
            <p>{props.announcementDate || "12/12/12"}</p>
          </div>
          <div className="card-body">
            <MDEditor.Markdown source={props.announcementBody} />
            {props.isModerator && (
              <>
                <div
                  className="modal fade"
                  id="editAnnouncementModal"
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
          {props.isModerator && (
            <div className="card-footer bg-white border-0 announcementFooter">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#editAnnouncementModal"
              >
                <div data-bs-toggle="tooltip" title="edit announcement">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-pen"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                  </svg>
                </div>
              </button>
              <div data-bs-toggle="tooltip" title="delete announcement">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Announcement;
