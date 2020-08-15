import React, { useState } from 'react'
import Filter from './components/Filter'

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (event) => {
    setSearchSequence(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={searchSequence} filterCb={handleSearchInput} />
      <h2>Add a number</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter(person => searchSequence.length === 0 || 
          person.name.toLowerCase().includes(searchSequence.toLowerCase()))
        .map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
