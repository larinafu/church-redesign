import "./ToggleButton.css";

import { useState } from "react";
const ToggleButton = (props) => {
  const [isEn, setIsEn] = useState(true);
  return (
    <>
      {isEn ? (
        <button
          className="btn rounded-pill btn-primary toggleBtnEn"
          data-bs-toggle="tooltip"
          title="toggle for Chinese site"
          onClick={() => setIsEn(!isEn)}
        >
          <p>EN</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </button>
      ) : (
        <button
          className="btn rounded-pill btn-danger toggleBtnCh"
          data-bs-toggle="tooltip"
          title="toggle for English site"
          onClick={() => setIsEn(!isEn)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          <p>中文</p>
        </button>
      )}
    </>
  );
};

export default ToggleButton;
