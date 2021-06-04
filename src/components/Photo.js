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
          <h5 style={{ marginBottom: "6px" }}>{props.photo.user.name}</h5>
          <p style={{ fontSize: "10px" }}>
            {props.photo.description
              ? props.photo.description.substring(0, 65)
              : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
