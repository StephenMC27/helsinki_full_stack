import React from 'react'

const DeleteButton = ({ name, deleteCb }) => {
  return (
    <button onClick={() => deleteCb(name)}>delete</button>
  )
}

export default DeleteButton;