import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('countries data received')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <form>
      find countries: <input onChange={handleFilterChange} value={filter}/>
    </form>
  )
}

export default App;
