import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Photo from "./Photo";
import classes from "./Photos.module.css";
import Button from "@material-ui/core/Button";
const Photos = (props) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      if (props.searchValue) {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${props.searchValue}`
        );
        const data = await response.json();
        setPhotos(data.results);
      } else {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M`
        );
        const data = await response.json();
        setPhotos(data);
      }
      setIsLoading(false);
    };
    fetchPhotos();
  }, [props.searchValue]);

  if (!isLoading && photos.length === 0) {
    return (
      <section>
        <p style={{ textAlign: "center", margin: "4rem 0" }}>No photos found</p>
      </section>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className={classes["photos-container"]}>
        {photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </div>
      {photos.length > 9 && (
        <a
          href="#top"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          {console.log(photos.length)}
          <Button variant="contained">Back to Top</Button>
        </a>
      )}
    </React.Fragment>
  );
};

export default Photos;
