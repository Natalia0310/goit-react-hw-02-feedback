import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

function Notification({message}) {
    return (
        <p className={css.notification}>{message}</p>
    );
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };

export default Notification;