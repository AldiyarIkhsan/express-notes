import React from "react";
import { Country } from "../interfaces/types";

interface Props {
  selectedCountry: string | null;
  countries: Country[];
}

const CountryDetails: React.FC<Props> = ({ selectedCountry, countries }) => {
  const country = countries.find((c) => c.name === selectedCountry);

  return (
    <div style={{ float: "right", width: "70%" }}>
      <h2>Country Details</h2>
      {selectedCountry ? (
        <div>
          <h3>{selectedCountry}</h3>
          <p>Capital: {country?.capital}</p>
          <p>Population: {country?.population}</p>
          <p>Borders: {country?.borders.join(", ")}</p>
        </div>
      ) : (
        <p>Please select a country</p>
      )}
    </div>
  );
};

export default CountryDetails;
