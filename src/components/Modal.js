import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={() => props.closeModal()}>
      <div className={classes.modal}>
        <a
          className={classes.item}
          href={props.photo.photo.links.download}
          target="_blank"
          rel="noreferrer"
        >
          View Photo
        </a>
        <a
          className={classes.item}
          href={props.photo.photo.user.links.html}
          target="_blank"
          rel="noreferrer"
        >
          Visit User Profile
        </a>
        <button
          onClick={() => props.closeModal()}
          className={classes["cancel-button"]}
        >
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
