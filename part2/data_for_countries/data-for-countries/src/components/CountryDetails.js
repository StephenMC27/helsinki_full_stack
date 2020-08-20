import React from 'react'
import Languages from './Languages'
import CityWeather from './CityWeather'

const CountryDetails = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <div>
        capital {country.capital}
      </div>
      <div>
        population {country.population}
      </div>
      <h3>Languages</h3>
      <div>
        <Languages languages={country.languages} />
      </div>
      <div style={{marginTop: 15}}>
        <img alt="a country's flag" src={country.flag} width="150" height="100" />
      </div>
      <h3>Weather in {country.capital}</h3>
      <CityWeather city={country.capital} />
    </div>
  )
}

export default CountryDetails;