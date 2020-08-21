import React from 'react'

const SuccessMessage = ({ type, message }) => {
  const successStyle = {
    color: 'green',
    fontSize: 20,
    fontStyle: 'bold',
    background: 'lightgrey',
    borderColor: 'green',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }

  if (message === null) {
    return null
  }

  return (
    <div style={successStyle}>
      {message}
    </div>
  )
}

export default SuccessMessage;