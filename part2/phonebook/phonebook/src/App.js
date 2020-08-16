import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from  './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '703-920-8848' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchSequence, setSearchSequence ] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    if (isDuplicateName(newName)) {
      window.alert(`${newName} is already added to the phonebook.`);
    } else {
      const nameObject = {name: newName, number: newNumber}
      setPersons(() => persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
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
      {persons
        .filter(person => searchSequence.length === 0 || 
          person.name.toLowerCase().includes(searchSequence.toLowerCase()))
        .map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
