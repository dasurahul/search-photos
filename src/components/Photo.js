import React from "react";
import classes from "./Photo.module.css";
const Photo = (props) => {
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
          src={props.photo.user.profile_image.small}
          alt={props.photo.user.name}
        />
        <h5>{props.photo.user.name}</h5>
      </div>
    </div>
  );
};

export default Photo;
