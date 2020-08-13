import React from 'react'

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
        <h2>{header}</h2>
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
  
  const Part = ({ part }) => {
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
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

  export default Course