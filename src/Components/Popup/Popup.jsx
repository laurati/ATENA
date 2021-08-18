import React from "react";
import "./Popup.css";
import Draggable from "react-draggable";
import CloseIcon from "@material-ui/icons/Close";

const Popup = (props) => {
  return props.trigger ? (
    <Draggable>
      <div className="popup">
        <div className="popup-header">
          <CloseIcon
            className="close-btn"
            onClick={() => props.setTrigger(false)}>close
          </CloseIcon>
        </div>
        <div className="popup-inner">{props.children}</div>
      </div>
    </Draggable>
  ) : (
    ""
  );
};

export default Popup;
