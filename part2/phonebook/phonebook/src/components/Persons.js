import React from 'react'
import Person from './Person'

const Persons = ({ persons, searchSequence, deleteCb })=> {
  return (
    persons.filter(person => searchSequence.length === 0 || 
    person.name.toLowerCase().includes(searchSequence.toLowerCase()))
    .map(person => <Person key={person.id} name={person.name} 
    number={person.number} deleteCb={(event) => deleteCb(event, person.id)} />)
  )
}

export default Persons