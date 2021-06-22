import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Search Photos</h1>
    </header>
  );
};

export default React.memo(Header);
