import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
const Form = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();
    if (searchValue.trim().length === 0) {
      setError("Enter something");
      return;
    }
    props.onSearch(searchValue);
    setSearchValue("");
  };
  return (
    <Container>
      <Snackbar
        open={error ? true : false}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert onClose={() => setError("")} severity="error">
          Enter something
        </Alert>
      </Snackbar>

      <InputForm onSubmit={searchHandler}>
        <Input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            setError("");
            setSearchValue(event.target.value);
          }}
        />
        <Button>
          <SearchIcon />
        </Button>
      </InputForm>
    </Container>
  );
};

export default React.memo(Form);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InputForm = styled.form`
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 10px 12px;
  display: flex;
  flex: 1;
  max-width: 600px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  :hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Input = styled.input`
  height: 32px;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  color: #222;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
`;
