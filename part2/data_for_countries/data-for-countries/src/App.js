import React, { useState, useEffect } from 'react';
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]) //array of JSON objects from RestCountries API
  const [ filter, setFilter ] = useState('')  //holds user input for country search

  //makes request to RestCountries API and pulls in JSON data
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('countries data received')
        setCountries(response.data)
      })
  }, [])
  console.log('recieved', countries.length, 'countries')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} filterCallback={handleFilterChange} />
      <CountryList countries={countries} filter={filter} />
    </div>
  )
}

export default App;
