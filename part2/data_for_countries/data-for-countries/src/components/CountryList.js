import React from 'react'
import CountryDetails from './CountryDetails'

const CountryList = ({ countries, filter, showCallback }) => { 
  //apply filter to countries array
  const countriesToDisplay = countries.filter(country => filter.length === 0 ||
    country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filter.length === 0) {
      return(<div></div>)
    } else if (countriesToDisplay.length > 10) {
      return('Too many matches. Please make filter more specific.')
    } else if (countriesToDisplay.length === 1) {
      return (
        <CountryDetails country={countriesToDisplay[0]} />
      )
    } else {
      return (
        countriesToDisplay.map(country => 
          <div key={country.name}>{country.name}
            <button style={{marginLeft: 10}} onClick={() => showCallback(country.name)}>Show</button>
          </div>)
        
      )
    }
}

export default CountryList;