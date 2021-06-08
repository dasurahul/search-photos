import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Photo from "./Photo";
import classes from "./Photos.module.css";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";

const Photos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
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

  const handleChange = (event, value) => {
    setCurrentPage(value);
    props.setNewSearch(false);
  };

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
        {allPages.length > 1 && (
          <Pagination
            page={currentPage}
            count={totalPages}
            onChange={handleChange}
          />
        )}
      </div>
      <div style={{ maxWidth: "600px", margin: "20px auto" }}>
        {props.searchValue && (
          <Button
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => {
              props.setSearchValue(null);
              setCurrentPage(1);
            }}
          >
            Go Back Home
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Photos;
