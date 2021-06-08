import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const downloadLink = props.photo.photo.links.download;
  const profileLink = props.photo.photo.user.links.html;
  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={() => props.closeModal()}>
      <div className={classes.modal}>
        <a
          className={classes.item}
          href={downloadLink}
          target="_blank"
          rel="noreferrer"
        >
          View Photo
        </a>
        <a
          className={classes.item}
          href={profileLink}
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
