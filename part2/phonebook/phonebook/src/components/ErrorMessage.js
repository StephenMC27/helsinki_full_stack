import React from 'react'

const ErrorMessage = ({ message }) => {
  const errorStyle = {
    color: 'red',
    fontSize: 20,
    fontStyle: 'bold',
    background: 'lightgrey',
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }

  if (message === null) {
    return null
  }

  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}

export default ErrorMessage;