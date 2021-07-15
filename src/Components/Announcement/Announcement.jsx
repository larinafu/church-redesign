import { useState } from "react";
import "./Announcement.css";

import pencil from "../../Images/pencil-square.svg";
import { hasCommonDiff } from "jest-diff/build/printDiffs";
const Announcement = (props) => {
    const [announcementDesc, setAnnouncementDesc] = useState('');
    console.log(`announcementdesc is ${announcementDesc}`)
    const handleAnnouncementSubmit = () => {
        {}
    }
  return (
    <>
      <section>
        <div className="card announcementCard">
          <div className="card-body">
            This is some text within a card body.
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
                            onChange={(e) => setAnnouncementDesc(e.target.value)}
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
