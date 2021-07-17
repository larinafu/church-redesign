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
  const [isMod, setIsMod] = useState(false);
  const [modName, setModName] = useState("");

  const [homeBody, setHomeBody] = useState("");

  const isMobile = useMediaQuery({ query: "(max-width: 60em)" });
  const isRealMobile = useMediaQuery ({ query: "(max-device-width: 60em"});

  const renderPages = (doc) => {
    if (doc.id === "home") {
      setHomeBody(doc.data().pageBody);
    }
  };
  useEffect(() => {
    db.collection("pages")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          renderPages(doc);
        });
      });
  }, []);

  const handleSavingEdits = () => {
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
        saveChanges={handleSavingEdits}
        isRealMobile={isRealMobile}
      />
      <Route exact path={"/"} component={Home}>
        <Home
          isModerator={isMod}
          setIsModerator={setIsMod}
          modName={modName}
          setModName={setModName}
          homeBody={homeBody}
          setHomeBody={setHomeBody}
          isMobile={isMobile}
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
