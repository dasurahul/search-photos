import React, { useState } from "react";
import classes from "./Photo.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const Photo = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = props.photo.description;
  let shortDescription = "";
  if (description) {
    shortDescription = description.substring(0, 50);
  }
  const readMore = () => {
    setShowFullDescription(true);
  };
  const readLess = () => {
    setShowFullDescription(false);
  };
  return (
    <div className={classes["photo-container"]}>
      <img
        className={classes.photo}
        src={props.photo.urls.regular}
        alt={props.photo.alt_description}
      />
      <div className={classes["user-details"]}>
        <img
          className={classes["user-image"]}
          src={props.photo.user.profile_image.large}
          alt={props.photo.user.name}
        />
        <div>
          <h5 style={{ marginBottom: "6px" }}>{props.photo.user.name}</h5>
          <div className={classes["image-description"]}>
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
