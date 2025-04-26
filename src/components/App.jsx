import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOption } from "./FeedbackOption/FeedbackOption";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleBtnFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state

    return (good + neutral + bad)
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const totalFeedback = this.countTotalFeedback()
    const positiveFeedback = Math.round((good / totalFeedback) * 100)
    return (positiveFeedback ? positiveFeedback : 0)
  }

  render() {
    return (
      <>
        <Section title='Please leave Feedback'>
          <FeedbackOption handleBtnFeedback={handleBtnFeedback}/>
        </Section>
        <Section title='Statistics'>
          {/* {this.countTotalfeedback() > 0 ? <Statistics />} : <Notification message='There is no feedback'/> */}
        </Section>
      </>
    )
  }
};
