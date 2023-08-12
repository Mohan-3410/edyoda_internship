import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import ProgressBar from "./ProgressBar";

export default function Form() {
  const [total, setTotal] = useState(0);

  function updateValue1() {
    setTotal(179);
  }
  function updateValue2() {
    setTotal(149);
  }
  function updateValue3() {
    setTotal(99);
  }
  return (
    <div className="form">
      <ProgressBar />
      <div className="form-header">
        <div className="text-5">Select your subcription plan</div>
      </div>
      <div className="input-container">
        <div className="text-field">
          <img
            className="radio-button"
            alt="Radio button"
            src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/radio-button-3.svg"
          />
          <div className="text-container">
            <div className="text-6">12 Months Subscription</div>
            <div className="right-text-container">
              <div className="top-text">
                <div className="text-7">Total</div>
                <div className="text-8">₹99</div>
              </div>
              <div className="div-3">
                <div className="text-9">₹8</div>
                <div className="text-10">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag">
            <div className="text-wrapper-3">Offer expired</div>
          </div>
        </div>
        <div className="text-field-2" onClick={updateValue1}>
          <img
            className="radio-button"
            alt="Radio button"
            src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/radio-button-2.svg"
          />
          <div className="text-container">
            <div className="text-11">12 Months Subscription</div>
            <div className="div-4">
              <div className="top-text">
                <div className="text-12">Total</div>
                <div className="text-13">₹179</div>
              </div>
              <div className="div-3">
                <div className="text-14">₹15</div>
                <div className="text-10">/mo</div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Recommended</div>
          </div>
        </div>
        <div className="text-field-3" onClick={updateValue2}>
          <img
            className="radio-button"
            alt="Radio button"
            src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/radio-button-1.svg"
          />
          <div className="text-container">
            <div className="text-11">6 Months Subscription</div>
            <div className="div-4">
              <div className="top-text">
                <div className="text-12">Total</div>
                <div className="text-13">₹149</div>
              </div>
              <div className="div-3">
                <div className="text-14">₹25</div>
                <div className="text-10">/mo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-field-4" onClick={updateValue3}>
          <img
            className="radio-button"
            alt="Radio button"
            src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/radio-button-1.svg"
          />
          <div className="text-container">
            <div className="text-11">3 Months Subscription</div>
            <div className="div-4">
              <div className="top-text">
                <div className="text-12">Total</div>
                <div className="text-13">₹99</div>
              </div>
              <div className="div-3">
                <div className="text-14">₹33</div>
                <div className="text-10">/mo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-container">
        <div className="div-5">
          <div className="div-6">Subscription Fee</div>
          <div className="text-15">₹18,500</div>
        </div>
        <div className="alert">
          <div className="div-5">
            <div className="text-16">Limited time offer</div>
            <div className="text-17">- ₹18,401</div>
          </div>
          <div className="alert-body">
            <img
              className="img"
              alt="Icon clock"
              src="https://generation-sessions.s3.amazonaws.com/91825f7a982f4d8242833bb787e27179/img/icon-clock.svg"
            />
            <p className="p">Offer valid till 25th March 2023</p>
          </div>
        </div>
        <div className="div-5">
          <p className="div-6">
            <span className="span">Total </span>
            <span className="text-wrapper-5">(Incl. of 18% GST)</span>
          </p>
          <div className="right-text">₹{total}</div>
        </div>
      </div>
      <ButtonContainer />
      <div className="icon-container">
        <div className="razorpay-icon" />
      </div>
    </div>
  );
}
