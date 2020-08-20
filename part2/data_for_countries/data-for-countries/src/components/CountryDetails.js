import React from 'react'

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
    </div>
  )
}

export default CountryDetails;