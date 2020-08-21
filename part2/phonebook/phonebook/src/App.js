import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from  './components/PersonForm'
import Persons from './components/Persons'
import phoneNumbers from './services/phone-numbers'

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
      if (window
        .confirm(`${newName} is already added to the phonebook. Would you like to update their number?`)) {
          updateNumber(newName, newNumber)
      }
    } else {
      const personObject = {name: newName, number: newNumber}
      phoneNumbers
        .addNumber(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const updateNumber = (name, number) => {
    const existingPerson = persons.find(person => person.name === name)
    const newPerson = {...existingPerson, number}
    phoneNumbers
      .changeNumber(newPerson)
      .then(updatedPerson => {
        console.log('updatedPerson', updatedPerson)
        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
      })
  }

  const deleteEntry = (event, id) => {
    event.preventDefault()
    const deleted = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${deleted.name} ?`)) {
      phoneNumbers
        .removeNumber(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          console.log('persons', persons)
        })
    }
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
