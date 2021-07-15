import { useState } from "react";
import shield from "../../Images/shield-lock-fill.svg";
import shieldCheck from "../../Images/shield-fill-check.svg";

import './Authentication.css'

const Authentication = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [modName, setModName] = useState('');
  console.log(`userId is ${userId}`);
  console.log(`password is ${password}`);

  const [hasFeedback, setHasFeedback] = useState(false);
  // [mod name, mod userId, mod password]
  const mods = [
    ["Larina", "larinafu", "hello"],
    ["Katherine", "katherinehu", "I'llchangethislater"],
  ];

  const isMod = (mods, modId, password) => {
    console.log("in submit verificaton");
    let modValid = true;
    if (modId === "" || password === "") {
      modValid = false;
    }
    for (let mod of mods) {
      console.log(`in for loop ${mod}`);
      if (mod.indexOf(modId) === 1) {
        console.log("username is correct");
        if (mod.indexOf(password) === 2) {
          modValid = true;
          setModName(mod[0])
          break;
        } else {
          modValid = false;
        }
      } else modValid = false;
    }
    if (modValid) {
      props.setIsModerator(true);
      setHasFeedback(false);
      setUserId("");
      setPassword("");
    } else {
      setHasFeedback(true);
      setPassword("");
    }
  };

  console.log(`isMod is ${props.isModerator}`);
  return (
    <>
      {props.isModerator ? (
        <>
          <button
            className="btn"
            data-bs-toggle="tooltip"
            title="leave edit mode"
            onClick={() => props.setIsModerator(false)}
          >
            <img src={shieldCheck} alt="a shield icon" />
          </button>
          <div
            className="modal fade"
            id="authenticationModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-normal fs-4" id="exampleModalLabel">
                    Welcome {modName}! You are now in edit mode
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <button className="btn" data-bs-toggle="tooltip" title="edit page">
            <div data-bs-toggle="modal" data-bs-target="#authenticationModal">
              <img src={shield} alt="a shield icon" />
            </div>
          </button>

          <div
            className="modal fade"
            id="authenticationModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-normal fs-4" id="exampleModalLabel">
                    Only moderators can access this feature!
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h3 className='fw-light fs-5 text-start'>If you are a mod, please enter your ModID and password</h3>
                  <form
                    method="post"
                    className="authenticationForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      isMod(mods, userId, password);
                    }}
                  >
                    {hasFeedback && (
                      <p className="text-danger">
                        Incorrect username or password
                      </p>
                    )}
                    <div className="authenticationInput">
                      <label className='text-start' htmlFor="userId">ModID</label>
                      <input
                        id="userId"
                        name="userId"
                        type="text"
                        onChange={(e) => setUserId(e.target.value)}
                      />
                    </div>
                    <div className="authenticationInput">
                      <label className='text-start' htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Enter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Authentication;
