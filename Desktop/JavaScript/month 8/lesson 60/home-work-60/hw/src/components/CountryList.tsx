import React from "react";
import { Country } from "../interfaces/types";

interface Props {
  countries: Country[];
  selectCountry: (countryName: string) => void;
}

const CountryList: React.FC<Props> = ({ countries, selectCountry }) => {
  return (
    <div style={{ float: "left", width: "30%" }}>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name} onClick={() => selectCountry(country.name)}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
