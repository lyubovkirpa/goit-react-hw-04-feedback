// import Section from "components/Section"
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  

  render() {
    const { good, neutral, bad } = this.state;  

    return (
      <>  
           
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />     
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}              
        />
      </>
    );
  }
}