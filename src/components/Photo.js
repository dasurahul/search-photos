import React, { useState } from "react";
import classes from "./Photo.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Modal from "./Modal";
const Photo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = props.photo.description;
  let shortDescription = "";
  if (description) {
    shortDescription = description.substring(0, 50);
  }

  if (description && description.length > 50) {
    shortDescription = shortDescription.concat("...");
  }
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const readMore = () => {
    setShowFullDescription(true);
  };
  const readLess = () => {
    setShowFullDescription(false);
  };
  return (
    <div className={classes["photo-container"]}>
      {modalIsOpen && <Modal photo={props} closeModal={closeModal} />}
      <div className={classes["user-details"]}>
        <div className={classes["user-data"]}>
          <img
            className={classes["user-image"]}
            src={props.photo.user.profile_image.large}
            alt={props.photo.user.name}
          />
          <h5>{props.photo.user.name}</h5>
        </div>
        <div>
          <MoreHorizIcon onClick={openModal} />
        </div>
      </div>
      <img
        className={classes.photo}
        src={props.photo.urls.regular}
        alt={props.photo.alt_description}
      />
      <div className={classes["photo-details"]}>
        <img
          className={classes["user-small-image"]}
          src={props.photo.user.profile_image.large}
          alt={props.photo.user.name}
        />
        <div className={classes["photo-data"]}>
          <h5>{props.photo.user.name}</h5>
          <div className={classes["photo-description"]}>
            {description && !showFullDescription && shortDescription}
            {description && showFullDescription && description}
            {description && description.length > 50 && !showFullDescription && (
              <ExpandMoreIcon onClick={readMore} />
            )}
            {description && description.length > 50 && showFullDescription && (
              <ExpandLessIcon onClick={readLess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
