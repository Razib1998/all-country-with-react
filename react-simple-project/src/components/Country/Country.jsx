import './Country.css';

const Country = ({country}) => {
  console.log(country);
  const {name, continents, flags} = country;
    return (
        <div className='country'>
          <h3>Name: {name?.common}</h3>  
          <h3>Continents: {continents}</h3>
          <img src= {flags.png} alt="" />  
        
      
        </div>
    );
};

export default Country;