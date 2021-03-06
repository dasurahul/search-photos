import React, { useState } from "react";
import classes from "./Photo.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Modal from "react-bootstrap/Modal";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import MyModal from "./Modal";

const Photo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  const name = props.photo.user.name;
  const photoUrl = props.photo.urls.regular;
  const userProfileImageUrl = props.photo.user.profile_image.large;
  const description = props.photo.description;
  const altDescription = props.photo.alt_description;
  const likes = props.photo.likes;
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
  const download = (e) => {
    e.preventDefault();
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes["photo-container"]}>
      {modalIsOpen && (
        <Modal show={modalIsOpen} centered animation>
          <Modal.Body>
            <a
              className={classes.link}
              href={props.photo.links.download}
              target="_blank"
              rel="noreferrer"
            >
              View Photo
            </a>
            <a
              className={classes.link}
              href={props.photo.user.links.html}
              target="_blank"
              rel="noreferrer"
            >
              Visit User Profile
            </a>
            <a
              href={photoUrl}
              className={classes.link}
              download
              onClick={(e) => download(e)}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
            <Button
              style={{
                textAlign: "center",
                display: "block",
                margin: "0 auto",
                color: "rgba(255, 0, 0, 0.8)",
              }}
              onClick={closeModal}
            >
              Cancel
            </Button>
          </Modal.Body>
        </Modal>
      )}
      <div className={classes["user-details"]}>
        <div className={classes["user-data"]}>
          <img
            className={classes["user-image"]}
            src={userProfileImageUrl}
            alt={name}
          />
          <h5>{name}</h5>
        </div>
        <div>
          <MoreHorizIcon
            className={classes["more-horiz-icon"]}
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <img className={classes.photo} src={photoUrl} alt={altDescription} />
      <div className={classes["photo-details"]}>
        <div className={classes["photo-data"]}>
          <h5>{name}</h5>
          <div className={classes["photo-description"]}>
            {description && !showFullDescription && shortDescription}
            {description && showFullDescription && description}
            {description && description.length > 50 && !showFullDescription && (
              <ExpandMoreIcon onClick={readMore} />
            )}
            {description && description.length > 50 && showFullDescription && (
              <ExpandLessIcon onClick={readLess} />
            )}
            {!description && altDescription}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className={classes.likes}>
                <FavoriteIcon className={classes["like-icon"]} />
                {likes}
              </div>
              <div>
                <ShareIcon
                  onClick={() => setOpen(true)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <MyModal url={photoUrl} closeModal={close} />}
    </div>
  );
};

export default Photo;
