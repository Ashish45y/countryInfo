import { useState, useEffect } from "react";
import { Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import Country from "./Country";
import Countries from "./Countries";

export default function Form() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleClick = (e) => {
    setInputValue(e.target.id);
  };

  const country = countries.filter((c) => c.name.common === inputValue);

  return (
    <Container style={{ marginTop: "3rem" }}>
      <Typography variant="h2" gutterBottom align="center">
        Country<span style={{ fontStyle: "italic" }}>Info</span>
      </Typography>
      <div>
        <TextField
          value={inputValue}
          onChange={handleInput}
          style={{ width: "100%" }}
          label="Entry Country Name"
          variant="filled"
        />
        {country.length !== 0 ? (
          <Country country={country[0]} />
        ) : (
          <Countries countries={filteredCountries} handleClick={handleClick} />
        )}
      </div>
    </Container>
  );
}
