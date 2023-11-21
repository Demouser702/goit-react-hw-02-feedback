import styles from './Section.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export const Section = ({
  title,
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) => (
  <div className={styles.section__container}>
    <h2>{title}</h2>
    {title === 'Leave Feedback' ? (
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    ) : total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedback}
      />
    )}
  </div>
);
