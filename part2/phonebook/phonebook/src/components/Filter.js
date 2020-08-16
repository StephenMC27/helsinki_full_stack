import React from 'react'

const Filter = ({ filter, filterCb }) => {
  return (
    <div>
      Search entries: <input onChange={filterCb} value={filter}/>
    </div>
  )
}

  export default Filter;