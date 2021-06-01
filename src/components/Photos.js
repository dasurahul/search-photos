import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Photo from "./Photo";
import classes from "./Photos.module.css";
const Photos = (props) => {
  console.log("Photos is RUNNING");
  const ACCESS_KEY = `8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M`;
  const [url, setUrl] = useState(
    `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
  );

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (props.value) {
      setUrl(
        `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&&query=${props.value}`
      );
    }
    const fetchPhotos = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (!props.value) {
        setTimeout(() => setPhotos(data), 1000);
      } else {
        setTimeout(() => setPhotos(data.results), 1000);
      }
      setTimeout(() => setIsLoading(false), 1000);
    };
    fetchPhotos();
  }, [url, props, ACCESS_KEY]);

  return (
    <div className={classes["photos-container"]}>
      {isLoading && <Loading />}
      {photos === undefined && <Loading />}
      {!isLoading &&
        photos !== undefined &&
        photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
    </div>
  );
};

export default Photos;
