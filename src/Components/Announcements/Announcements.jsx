// Packages
import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

// Components
import Announcement from "../Announcement/Announcement";
import Authentication from "../Authentication/Authentication";

// CSS File
import "./Announcements.css";

// Database
import db from "../Firestore/Firestore";

const Announcements = (props) => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementChange, setAnnouncementChange] = useState(false);
  const [announcementBody, setAnnouncementBody] =
    useState("**Hello world!!!**");

  useEffect(() => {
    db.collection("announcements")
      .orderBy("timestamp", "desc")
      .get()
      .then((snapshot) => {
        setAnnouncements([]);
        snapshot.docs.forEach((doc) => {
          renderAnnouncements(doc);
        });
      });
  }, [props.isModerator, announcementChange]);

  const renderAnnouncements = (doc) => {
    setAnnouncements((announcements) => [
      ...announcements,
      <li key={doc.id}>
        <Announcement
          modName={doc.data().mod}
          announcementDate={doc.data().date}
          announcementBody={doc.data().description}
          announcementId={doc.id}
          isModerator={props.isModerator}
          announcementAuthor={doc.data().user}
          modUser={props.modUser}
          modType={props.modType}
        />
      </li>,
    ]);
  };

  const submitAnnouncementToFirestore = () => {
    db.collection("announcements").add({
      timestamp: new Date(),
      date: new Date().toLocaleDateString("en-US"),
      mod: props.modName,
      description: announcementBody,
      user: props.modUser,
    });
    setAnnouncementChange(!announcementChange);
  };

  return (
    <section className="container-sm announcementsContainer">
      <div className="announcementsHeaderContainer">
        <div>
          {props.isModerator && (
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#addAnnouncementModal"
            >
              <div data-bs-toggle="tooltip" title="add announcement">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-file-earmark-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
      <ul className="border">{announcements}</ul>
      <div
        className="modal fade"
        id="addAnnouncementModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modalAnnouncementContainer">
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
                  submitAnnouncementToFirestore();
                }}
              >
                <div className="addAnnouncementInput">
                  <h3 className="fs-2 fw-light">
                    This announcement feature uses markdown!
                  </h3>
                  <p>
                    wrap *single asterisks around text* for{" "}
                    <em>italicized font</em>
                  </p>
                  <p>
                    wrap **single asterisks around text** for{" "}
                    <strong>bolded font</strong>
                  </p>
                  <div className="markdownContainer">
                    <MDEditor
                      value={announcementBody}
                      onChange={setAnnouncementBody}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary modal-footer mt-3"
                  data-bs-dismiss="modal"
                >
                  Create Announcement
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
