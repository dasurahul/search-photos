import React, { useRef } from "react";
import classes from "./Form.module.css";
const Form = ({ onSearch }) => {
  console.log("Form is RUNNING");
  const searchRef = useRef();
  const searchHandler = (event) => {
    event.preventDefault();
    onSearch(searchRef.current.value);
  };
  return (
    <form onSubmit={searchHandler} className={classes.form}>
      <input className={`${classes.input}`} ref={searchRef} type="text" />
      <button className={`${classes.input} ${classes.button}`} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
