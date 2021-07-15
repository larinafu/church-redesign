import { useState } from "react";
import { Route, Link } from "react-router-dom";

// Site Pages (English)
import Home from "./Components/WebPages/English/Home/Home";
import About from "./Components/WebPages/English/About/About";
import Worship from "./Components/WebPages/English/Worship/Worship";
import Sermons from "./Components/WebPages/English/Sermons/Sermons";

import Announcement from "./Components/Announcement/Announcement";
import Announcements from "./Components/Announcements/Announcements";
import Authentication from "./Components/Authentication/Authentication";
import Navbar from "./Components/Navbar/Navbar";
import Sermon from "./Components/Sermon/Sermon";
import Footer from "./Components/Footer/Footer";
import logo from "./logo.svg";
import "./App.css";
// import {Authentication} from './Components/Authentication/Authentication.js'

function App() {
  const [isMod, setIsMod] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Route exact path={"/","/home"} component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/worship" component={Worship} />
      <Route exact path="/sermons" component={Sermons} />
      
      <Announcements isModerator={isMod} />
      <Sermon isModerator={isMod} />
      <Authentication isModerator={isMod} setIsModerator={setIsMod} />
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
