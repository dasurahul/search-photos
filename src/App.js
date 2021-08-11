import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Photos from "./components/Photos";
import Share from "./components/Share";
import { Route } from "react-router-dom";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newSearch, setNewSearch] = useState(false);
  const searchHandler = useCallback((searchValue) => {
    setSearchValue(searchValue);
    setNewSearch(true);
  }, []);
  return (
    <React.Fragment>
      <Route path="/" exact>
        <Header />
        <Form onSearch={searchHandler} />
        <Photos
          newSearch={newSearch}
          setNewSearch={setNewSearch}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </Route>
      <Route path="/share/:part1//:part2/:part3">
        <Share />
      </Route>
    </React.Fragment>
  );
};

export default App;
