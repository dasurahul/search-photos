import React, { useRef } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const searchRef = useRef();
  const searchHandler = (event) => {
    event.preventDefault();
    if (searchRef.current.value.trim().length === 0) {
      alert("Enter something");
      return;
    }
    props.onSearch(searchRef.current.value);
  };
  return (
    <form onSubmit={searchHandler} className={classes.form}>
      <input
        className={`${classes.input} ${classes["text-input"]}`}
        ref={searchRef}
        type="text"
      />
      <button className={`${classes.input} ${classes.button}`} type="submit">
        Search
      </button>
    </form>
  );
};

export default React.memo(Form);
