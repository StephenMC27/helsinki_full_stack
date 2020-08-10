import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text }) => <button>{text}</button>

const Statistic = ({ text, value }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalReviews = good + neutral + bad
  const averageScore = () => (good + bad * -1) / (totalReviews)
  const percentPositive = () => (good / totalReviews) * 100

  if (totalReviews === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return  (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={totalReviews}/>
      <Statistic text="average" value={averageScore()}/>
      <Statistic text="positive" value={percentPositive()}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
