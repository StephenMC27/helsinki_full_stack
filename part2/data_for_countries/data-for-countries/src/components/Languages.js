import React from 'react'

const Languages = ({ languages }) => {
  return (
    languages.map(language => <li style={{marginLeft: 20}} key={language.name}>{language.name}</li>)
  )
}

export default Languages;