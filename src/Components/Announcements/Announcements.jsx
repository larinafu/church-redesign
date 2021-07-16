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
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementChange, setAnnouncementChange] = useState(false);
  const [value, setValue] = useState("**Hello world!!!**");

  const formatDate = (dateObject) => {
    let date = JSON.stringify(dateObject);
    let year = date.substring(1, 5);
    let month = date.substring(6, 8);
    let day = date.substring(9, 11);
    return month + "/" + day + "/" + year;
  };

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
      <Announcement
        modName={doc.data().mod}
        announcementDate={doc.data().date}
        announcementBody={doc.data().description}
        isModerator={props.isModerator}
        value={value}
      />,
    ]);
  };

  const submitAnnouncementToFirestore = () => {
    db.collection("announcements").add({
      timestamp: new Date(),
      date: formatDate(new Date()),
      mod: props.modName,
      description: value,
      title: announcementTitle,
    });
    setAnnouncementChange(!announcementChange);
  };

  return (
    <section className="container-sm announcementsContainer">
      <div className="announcementsHeaderContainer">
        <h1 className="display-3 text-start">Announcements</h1>
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
                  class="bi bi-file-earmark-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </div>
            </button>
          )}
          <Authentication
            isModerator={props.isModerator}
            setIsModerator={props.setIsModerator}
            modName={props.modName}
            setModName={props.setModName}
          />
        </div>
      </div>
      <ul className='border'>
        {announcements.map((announcement) => {
          return <li>{announcement}</li>;
        })}
      </ul>
      <div
        class="modal fade"
        id="addAnnouncementModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modalAnnouncementContainer">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitAnnouncementToFirestore();
                }}
              >
                {/* <div className="addAnnouncementInput">
                  <label className="text-start" htmlFor="annoucementTitle">
                    Title
                  </label>
                  <input
                    id="annoucementTitle"
                    name="annoucementTitle"
                    type="text"
                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                  />
                </div> */}
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
                  <div class="markdownContainer">
                    <MDEditor value={value} onChange={setValue} />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary modal-footer mt-3"
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
