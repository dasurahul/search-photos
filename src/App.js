import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Photos from "./components/Photos";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (data) => {
    setSearchValue(data);
  };
  return (
    <React.Fragment>
      <Header />
      <Form onSearch={searchHandler} />
      <Photos value={searchValue} />
    </React.Fragment>
  );
};

export default App;
