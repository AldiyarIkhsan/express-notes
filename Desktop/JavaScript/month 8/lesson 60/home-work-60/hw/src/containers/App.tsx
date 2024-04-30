import  { useState, useEffect } from "react";
import { Country } from "../interfaces/types";
import { fetchData} from "../components/api"
import CountryList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data, error } = await fetchData<Country[]>(
        "https://restcountries.com/v3.1/all"
      );

      if (data) {
        setCountries(data);
      }

      if (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const selectCountry = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  return (
    <div>
      <CountryList countries={countries} selectCountry={selectCountry} />
      <CountryDetails
        selectedCountry={selectedCountry}
        countries={countries}
      />
    </div>
  );
}

export default App;
