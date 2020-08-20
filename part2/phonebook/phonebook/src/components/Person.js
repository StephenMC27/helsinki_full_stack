import React from 'react'
import DeleteButton from './DeleteButton'

const Person = ({ name, number, deleteCb }) => {
  return (
    <div>{name} 
      {number}
      <DeleteButton name={name} deleteCb={deleteCb} />
    </div>
  )
}

export default Person