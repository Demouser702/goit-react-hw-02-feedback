import React, { Component } from 'react';
import { Section } from './Section/Section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.handleLeaveFeedback = this.handleLeaveFeedback.bind(this);
  }

  handleLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <Section
          title="Leave Feedback"
          options={this.state}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Section
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
