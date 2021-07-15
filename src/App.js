import { useState } from "react";
import Announcement from "./Components/Announcement/Announcement";
import Announcements from "./Components/Announcements/Announcements";
import Authentication from "./Components/Authentication/Authentication";
import Navbar from "./Components/Navbar/Navbar";
import Sermon from "./Components/Sermon/Sermon";
import logo from "./logo.svg";
import "./App.css";
// import {Authentication} from './Components/Authentication/Authentication.js'

function App() {
  const [isMod, setIsMod] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Announcements isModerator={isMod} />
      <Sermon isModerator={isMod} />
      <Authentication isModerator={isMod} setIsModerator={setIsMod} />
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
