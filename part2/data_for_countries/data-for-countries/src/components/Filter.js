import React from 'react'

const Filter = ({ filterCallback, filter }) => {
  return (<form>
      find countries: <input onChange={filterCallback} value={filter}/>
    </form>
  )
}

export default Filter;