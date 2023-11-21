import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <div className={styles.notification__text}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
