import React from "react";
import Form from "./Form";
import MainLockup from "./MainLockup";
import Navbar from "./Navbar";
import "./style.css";

export const CodingAssignment = () => {
  return (
    <div className="coding-assignment">
      <Navbar />
      <div className="content-container">
        <div className="overlap">
          <Form />
          <MainLockup />
        </div>
      </div>
    </div>
  );
};
