import React from "react";
import "./MsgSuccess.css";

const MsgSuccess = ({ show, setshowMessage }) => {
  if (show) {
    setTimeout(() => {
      setshowMessage(false);
    }, 3000);
  }
  if (show) {
    return (
      <div className="message-success">
        <h3>This is a success message!</h3>
      </div>
    );
  } else {
    return;
  }
};

export default MsgSuccess;
