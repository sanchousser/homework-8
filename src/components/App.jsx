import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOption } from "./FeedbackOption/FeedbackOption";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)


  const countTotalFeedback = () => {
    return (good + neutral + bad)
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback()
    const positiveFeedback = Math.round((good / totalFeedback) * 100)
    return (positiveFeedback ? positiveFeedback : 0)
  }


  return (
    <>
      <Section title='Please leave Feedback'>
        <FeedbackOption onGood={handleGood} onBad={handleBad} onNeutral={handleNeutral} />
      </Section>
      <Section title='Statistics'>

        {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positive={countPositiveFeedbackPercentage()} /> : <Notification message='There is no feedback' />}
      </Section>
    </>
  )
}
