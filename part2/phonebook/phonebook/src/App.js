import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from  './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/phone-numbers'
import phoneNumbers from './services/phone-numbers'
//import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchSequence, setSearchSequence ] = useState('')

  useEffect(() => {
    numberService
      .getNumbers()
      .then(allNumbers => {
        setPersons(allNumbers)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()
    if (isDuplicateName(newName)) {
      window.alert(`${newName} is already added to the phonebook.`);
    } else {
      const nameObject = {name: newName, number: newNumber}
      phoneNumbers
        .addNumber(nameObject)
        .then(returnedNumber => {
          setPersons(persons.concat(returnedNumber))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const deleteEntry = (id) => {

  }

  const isDuplicateName = (name) => {
    const names = persons.map(person => person.name)
    return names.includes(name)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (event) => {
    setSearchSequence(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={searchSequence} filterCb={handleSearchInput} />
      <h3>Add a number</h3>
      <PersonForm name={newName} number={newNumber} nameChange={handleNameChange} 
        numberChange={handleNumberChange} submit={addEntry} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchSequence={searchSequence} deleteCb={deleteEntry} />
    </div>
  )
}

export default App
