import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    // To show the visited country in visited countries list.
    const [visitedCountries, setVisitedCountries] = useState([]);
    // to show visited country flag

    const [visitedCountriesFlag,setVisitedCountriesFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then(res => res.json())
          .then(data => setCountries(data));
    },[])

  const handleVisitedCountry = country =>{
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
  const handleVisitedCountriesFlag = flag => {
   const newVisitedCountriesFlags = [...visitedCountriesFlag, flag];
   setVisitedCountriesFlags(newVisitedCountriesFlags);
  }
    return (
      <div>
        <h3>Countries: {countries.length}</h3>
        <div>
          <h3>Visited countries: {visitedCountries.length}</h3>

          {/* For visited countries list */}
          <ul>
            {visitedCountries.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        </div>
        <div className="flag-container">
         {
          visitedCountriesFlag.map((flag, idx )=> <img key={idx} src = {flag}></img>)
         }
        </div>

        {/* Display country */}

        <div className="country-container">
          {countries.map((country) => (
            <Country
              key={country.cca3}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedCountriesFlag={handleVisitedCountriesFlag}
              country={country}
            ></Country>
          ))}
        </div>
      </div>
    );
};

export default Countries;