import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all <= 0) {
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  } else return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    console.log("This is a good feedback")
    setGood(good => good + 1)
  }
  const neutralFeedback = () => {
    console.log("This is a neutral feedback")
    setNeutral(neutral => neutral + 1)
  }
  const badFeedback = () => {
    console.log("This is a bad feedback")
    setBad(bad => bad + 1)
  }

  const totalFeedback = good + bad + neutral

  const feedBackSlider = good * 1 + neutral * 0  + bad * -1

  const average = feedBackSlider/totalFeedback

  const positive = (good/totalFeedback)*100 

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => goodFeedback()}>good</button>
      <button onClick={() => neutralFeedback()}>neutral</button>
      <button onClick={() => badFeedback()}>bad</button>
      <Statistics good={good} neutral = {neutral} bad={bad} all={totalFeedback} positive={positive} average = {average}/>
    </div>
  )
}

export default App