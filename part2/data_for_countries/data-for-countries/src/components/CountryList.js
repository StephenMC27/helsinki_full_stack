import React from 'react'

const CountryList = ({ countries, filter }) => { 
  //apply filter to countries array
  const countriesToDisplay = countries.filter(country => filter.length === 0 ||
    country.name.toLowerCase().includes(filter.toLowerCase()))

    if (countriesToDisplay.length > 10) {
      return('Too many matches. Please make filter more specific.')
    } else if (countriesToDisplay.length === 1) {
      return (
        
      )
    } else {
      return (
        countriesToDisplay.map(country => <li key={country.name}>{country.name}</li>)
      )
    }
}

export default CountryList;