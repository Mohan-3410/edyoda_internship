import React from "react";

export default function Navbar(props) {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="div">
          <div className="LOGO">
            <div className="text-wrapper">EDYODA</div>
          </div>
          <div className="div-2">
            <div className="text">Courses</div>
            <img
              className="img"
              alt="Icon chevron down"
              src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/icon-chevron-down-1.svg"
            />
          </div>
          <div className="div-2">
            <div className="text">Programs</div>
            <img
              className="img"
              alt="Icon chevron down"
              src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/icon-chevron-down-1.svg"
            />
          </div>
        </div>
        <div className="div">
          <img
            className="img"
            alt="Search icon"
            src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/search-icon.svg"
          />
          <div className="log-in">
            <div className="text-2">Log in</div>
          </div>
          <div className="primary-button">
            <div className="text-3">JOIN NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
}
