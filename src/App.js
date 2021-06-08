import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Photos from "./components/Photos";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newSearch, setNewSearch] = useState(false);
  const searchHandler = useCallback((searchValue) => {
    setSearchValue(searchValue);
    setNewSearch(true);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Form onSearch={searchHandler} />
      <Photos
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </React.Fragment>
  );
};

export default App;
