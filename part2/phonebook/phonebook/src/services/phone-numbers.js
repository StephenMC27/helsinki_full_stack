import axios from 'axios'

const getNumbers = () => {
  return (
    axios
      .get('http://localhost:3001/persons')
      .then(response => response.data)
  )
} 

const addNumber = newNumber => {
  return (
    axios
      .post('http://localhost:3001/persons', newNumber)
      .then(response => response.data)
  )
}

const changeNumber = (id, newNumber) => {
  return (
    axios
      .put(`http://localhost:3001/persons/${id}`, newNumber)
      .then(response => response.data)
  )
}

const removeNumber = (id) => {
  return(
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(response => response.data)
  )
}
  

export default {
  getNumbers,
  addNumber,
  changeNumber,
  removeNumber
}