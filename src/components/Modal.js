import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { ShareSocial } from "react-share-social";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  width: "80%",
  maxWidth: "500px",
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={() => props.closeModal()}>
      <div className={classes.modal}>
        <ShareSocial
          style={style}
          url={props.url}
          socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
        />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
