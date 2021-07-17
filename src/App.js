// Imports
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Site Pages (English)
import Home from "./Components/WebPages/English/Home/Home";
import About from "./Components/WebPages/English/About/About";
import Worship from "./Components/WebPages/English/Worship/Worship";
import Sermons from "./Components/WebPages/English/Sermons/Sermons";
import SiteInfo from "./Components/WebPages/English/SiteInfo/SiteInfo";

// Other child components
import Navbar from "./Components/Navbar/Navbar";
import Sermon from "./Components/Sermon/Sermon";
import Footer from "./Components/Footer/Footer";
import Authentication from "./Components/Authentication/Authentication";

// CSS files
import "./App.css";

// database
import db from "./Components/Firestore/Firestore";

function App() {
  // mod information hooks
  // is website user a mod? TODO: get rid of this hook eventually
  const [isMod, setIsMod] = useState(false);

  // moderator's screen name
  const [modName, setModName] = useState("");

  // moderator's edit privileges
  const [modType, setModType] = useState("");

  // moderator's username
  const [modUser, setModUser] = useState("");

  // page content hooks
  // content on home page
  const [homeBody, setHomeBody] = useState("");

  // Media queries

  // is user's browser mobile-sized?
  const isMobile = useMediaQuery({ query: "(max-width: 60em)" });

  // is user on an actual phone?
  const isRealMobile = useMediaQuery({ query: "(max-device-width: 60em" });

  /**
   * Sets all of the site pages
   * TODO: implement other pages
   * @param {*} doc 
   */
  const renderPages = (doc) => {
    if (doc.id === "home") {
      setHomeBody(doc.data().pageBody);
    }
  };

  // Gets the pages from firestore and renders them onto site
  useEffect(() => {
    db.collection("pages")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          renderPages(doc);
        });
      });
  }, []);

  /**
   * Updates the pageBodies in the firestore
   * "pages" collection when edited by a moderator
   */
  const handleSavingEdits = () => {
    setModType("");
    setModUser("");
    db.collection("pages").doc("home").update({
      lastEditedBy: modName,
      lastEditedDate: new Date(),
      pageBody: homeBody,
    });
  };

  return (
    <div className="App">
      <Navbar
        isModerator={isMod}
        setIsModerator={setIsMod}
        modName={modName}
        setModName={setModName}
        handleSavingEdits={handleSavingEdits}
      />
      <Authentication
        isModerator={isMod}
        setIsModerator={setIsMod}
        modName={modName}
        setModName={setModName}
        modType={modType}
        setModType={setModType}
        saveChanges={handleSavingEdits}
        isRealMobile={isRealMobile}
        setModUser={setModUser}
      />
      <Route exact path={"/"} component={Home}>
        <Home
          isModerator={isMod}
          setIsModerator={setIsMod}
          modName={modName}
          setModName={setModName}
          modType={modType}
          homeBody={homeBody}
          setHomeBody={setHomeBody}
          isMobile={isMobile}
          modUser={modUser}
        />
      </Route>
      <Route exact path={"/home"} component={Home}>
        <Home
          isModerator={isMod}
          setIsModerator={setIsMod}
          modName={modName}
          setModName={setModName}
        />
      </Route>
      <Route exact path="/about" component={About} />
      <Route exact path="/worship" component={Worship} />
      <Route exact path="/sermons" component={Sermons}>
        <Sermons
          isModerator={isMod}
          setIsModerator={setIsMod}
          modName={modName}
          setModName={setModName}
        />
      </Route>
      <Route exact path="/site-info" component={SiteInfo} />
      <Sermon isModerator={isMod} />
      <Footer />
    </div>
  );
}

export default App;
