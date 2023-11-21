import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback__container}>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={styles.feedback__button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
