import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry,handleVisitedCountriesFlag }) => {
  console.log(country);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  }

  const { name, continents, flags, population, area, cca3 } = country;
  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <h3>Continents: {continents}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <img src={flags.png} alt="" />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark As Visited
      </button>{" "}
      <br /> <br />
      <br />
      <br />
      <button onClick={() => handleVisitedCountriesFlag(country.flags.png)}>Add Flag</button>
      {visited ? "I have Already visit this country" : "I want to visit"}
    </div>
  );
};

export default Country;