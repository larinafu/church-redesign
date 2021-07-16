// Imports
import { useState } from "react";
import { Route } from "react-router-dom";

// Site Pages (English)
import Home from "./Components/WebPages/English/Home/Home";
import About from "./Components/WebPages/English/About/About";
import Worship from "./Components/WebPages/English/Worship/Worship";
import Sermons from "./Components/WebPages/English/Sermons/Sermons";
import SiteInfo from "./Components/WebPages/English/SiteInfo/SiteInfo";

// Other components
import Navbar from "./Components/Navbar/Navbar";
import Sermon from "./Components/Sermon/Sermon";
import Footer from "./Components/Footer/Footer";

// CSS files
import "./App.css";

function App() {
  const [isMod, setIsMod] = useState(false);
  const [modName, setModName] = useState("");
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Route exact path={"/"} component={Home}>
        <Home
          isModerator={isMod}
          setIsModerator={setIsMod}
          modName={modName}
          setModName={setModName}
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
