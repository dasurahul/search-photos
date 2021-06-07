import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Photo from "./Photo";
import classes from "./Photos.module.css";

const Photos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPhotos = async (page = 1) => {
      setIsLoading(true);
      if (props.searchValue) {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${props.searchValue}&&page=${currentPage}`
        );
        const data = await response.json();
        setPhotos(data.results);
        setTotalPages(data.total_pages);
      } else {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&per_page=20`
        );
        const data = await response.json();
        setPhotos(data);
      }
      setIsLoading(false);
    };
    fetchPhotos();
  }, [props.searchValue, currentPage]);

  let allPages = [];
  for (let i = 1; i <= totalPages; i++) {
    allPages.push(i);
  }

  console.log(allPages);

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
      <div className={classes["buttons-container"]}>
        {allPages > 1 &&
          allPages.map((page) => {
            return (
              <button
                className={classes.button}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
      </div>
      {photos.length > 9 && (
        <a className={classes.btn} href="#top" variant="contained">
          Back to Top
        </a>
      )}
    </React.Fragment>
  );
};

export default Photos;
