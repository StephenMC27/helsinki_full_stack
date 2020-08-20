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

  // useEffect(() => {
  //   console.log('weather effect')
  //   const api_key = process.env.REACT_APP_API_KEY
  //   const request_url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + filter
  //   if (filter) {
  //     axios
  //     .get(request_url)
  //     .then(response => {
  //       console.log('weather response received')
  //       console.log(response.data)
  //       if (response.data.success !== false) {
  //         setWeather(response.data)
  //         console.log('weather set to ', response.data)
  //       }
  //     })
  //   }
  // }, [filter])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handleShow = (name) => {
    setFilter(name)
  }

  return (
    <div>
      <Filter filter={filter} filterCallback={handleFilterChange} />
      <CountryList countries={countries} filter={filter} showCallback={handleShow} />
    </div>
  )
}

export default App;
