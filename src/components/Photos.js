import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Photo from "./Photo";
import classes from "./Photos.module.css";
const Photos = (props) => {
  const [url, setUrl] = useState(
    `https://api.unsplash.com/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M`
  );
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (props.value) {
      setUrl(
        `https://api.unsplash.com/search/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${props.value}`
      );
    }
    const fetchPhotos = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (props.value) {
        setPhotos(data.results);
      } else {
        setPhotos(data);
      }
      setIsLoading(false);
    };
    fetchPhotos();
  }, [url, props]);

  if (isLoading) {
    return <Loading />;
  }

  if (photos === undefined) {
    return <Loading />;
  }

  if (photos.length === 0) {
    return (
      <p style={{ textAlign: "center", margin: "4rem 0" }}>No photos found</p>
    );
  }

  return (
    <div className={classes["photos-container"]}>
      {photos.map((photo) => {
        return <Photo key={photo.id} photo={photo} />;
      })}
    </div>
  );
};

export default Photos;
