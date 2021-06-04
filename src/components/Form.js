import React, { useState } from "react";
import classes from "./Form.module.css";
import SearchIcon from "@material-ui/icons/Search";
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
    setSearchValue("");
  };
  return (
    <form
      onSubmit={searchHandler}
      className={`${classes.form} ${!isValid ? classes.invalid : ""}`}
    >
      <input
        className={classes.input}
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => {
          setIsValid(true);
          setSearchValue(event.target.value);
        }}
      />
      <button className={`${classes.input} ${classes.button}`}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default React.memo(Form);
