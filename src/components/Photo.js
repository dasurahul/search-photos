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
          src={props.photo.user.profile_image.large}
          alt={props.photo.user.name}
        />
        <div>
          <h5>{props.photo.user.name}</h5>
          <p style={{ marginTop: "10px", fontSize: "12px" }}>
            {props.photo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
