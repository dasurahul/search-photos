import React, { useState } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const searchHandler = (event) => {
    event.preventDefault();
    if (searchValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSearch(searchValue);
  };
  return (
    <form onSubmit={searchHandler} className={classes.form}>
      <input
        className={`${classes.input} ${!isValid ? classes.invalid : ""}`}
        type="text"
        value={searchValue}
        onChange={(event) => {
          setIsValid(true);
          setSearchValue(event.target.value);
        }}
      />
      <button className={`${classes.input} ${classes.button}`} type="submit">
        Search
      </button>
    </form>
  );
};

export default React.memo(Form);
