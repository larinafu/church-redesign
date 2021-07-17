import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

// Components
import Announcements from "../../../Announcements/Announcements";

// CSS file
import "./Home.css";

// database
import db from "../../../Firestore/Firestore";

const Home = (props) => {
  useEffect(() => {
    db.collection("pages")
      .orderBy("timestamp", "desc")
      .get()
      .then((snapshot) => {
        // setAnnouncements([]);
        snapshot.docs.forEach((doc) => {
          //   renderAnnouncements(doc);
        });
      });
  }, []);
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" data-bs-interval="3000">
          <div className="carousel-item active">
            <img
              src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <section className="row mt-3 gx-0 homeSectionContainer">
        <main className="col-12 col-md-8 p-3 text-start homeBody">
          <div className="ms-2">
            {(props.modType !== 'light' && props.modType !== '') ? (
              <div className="homeMarkdownContainer">
                <MDEditor
                  value={props.homeBody}
                  onChange={props.setHomeBody}
                  preview={props.isMobile ? 'edit':'live'}
                  height={400}
                />
              </div>
            ) : (
              <MDEditor.Markdown source={props.homeBody} />
            )}
          </div>
        </main>
        <aside className="col-12 col-md-4 p-3">
          <Announcements
            isModerator={props.isModerator}
            setIsModerator={props.setIsModerator}
            modName={props.modName}
            setModName={props.setModName}
            modType={props.modType}
            modUser={props.modUser}
          />
        </aside>
      </section>
    </>
  );
};

export default Home;
