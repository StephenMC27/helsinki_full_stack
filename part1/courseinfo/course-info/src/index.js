import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

const Header = ({ header }) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = ({ content }) => {
  return (
    <div>
      {content.map(part => <Part part={part} />)}
    </div>
  )
}

const Total = ({ content }) => {
  let sum = (content.map(part => part.exercises)).reduce((total, num) => total + num)

  return (
    <div>
      <p>
        <strong>
          Total number of exercises: {sum}
        </strong>
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
