import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from 'components/Notification';
import upperCase from 'utils/upperCase.js';
import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state).map(upperCase);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = values => values.reduce((acc, e) => (acc += e));

  countPositiveFeedbackPercentage = (good, totalFeedback) =>
    totalFeedback && Math.round((good / totalFeedback) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback([good, neutral, bad]);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );  

    return (
      <>  
        <Section title="Please leave feedback">       
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
        {!total ? (
            <Notification message="There is no feedback" />
          ) : (     
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad} 
            total={total}
            positivePercentage={positivePercentage}             
          />
        )}  
        </Section>
      </>
    );
  }
}