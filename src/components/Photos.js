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
    const fetchPhotos = async () => {
      setIsLoading(true);
      if (props.searchValue) {
        let response;
        if (props.newSearch) {
          setCurrentPage(1);
          response = await fetch(
            `https://api.unsplash.com/search/photos?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${props.searchValue}&&page=1`
          );
        } else {
          response = await fetch(
            `https://api.unsplash.com/search/photos?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${props.searchValue}&&page=${currentPage}`
          );
        }
        const data = await response.json();
        setPhotos(data.results);
        setTotalPages(data.total_pages);
      } else {
        const response = await fetch(
          `https://api.unsplash.com/photos?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&per_page=20`
        );
        const data = await response.json();
        setPhotos(data);
      }
      setIsLoading(false);
    };
    fetchPhotos();
  }, [props.searchValue, props.newSearch, currentPage]);

  let allPages = [];
  if (props.searchValue) {
    for (let i = 1; i <= totalPages; i++) {
      allPages.push(i);
    }
  }

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
        {allPages.length > 1 &&
          allPages.map((page) => {
            let className = classes.button;
            if (page === currentPage) {
              className = `${classes.button} ${classes["active-button"]}`;
            }
            return (
              <button
                className={className}
                onClick={() => {
                  setCurrentPage(page);
                  props.setNewSearch(false);
                }}
              >
                {page}
              </button>
            );
          })}
      </div>
      <div>
        {props.searchValue && (
          <button
            className={classes["home-button"]}
            onClick={() => {
              props.setSearchValue(null);
              setCurrentPage(1);
            }}
          >
            Go Back Home
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Photos;
