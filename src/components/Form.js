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
  text-align: center;
  width: 75%;
  max-width: 400px;
  margin: 0 auto;
`;

const InputForm = styled.form`
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 32px;
  padding: 10px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  color: #222;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
`;
