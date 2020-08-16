import React from 'react'

const PersonFrom = ({ name, number, nameChange, numberChange, submit}) => {

    return (
      <form onSubmit={submit}>
        <div>
          name: <input onChange={nameChange} value={name} />
        </div>
      <div>
        number: <input onChange={numberChange} value={number} />
      </div>
      <button type="submit">add</button>
      </form>
    )
}

export default PersonFrom