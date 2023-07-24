import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={css.feedbackButtons}>
            {options.map((option) => (
                <li key={option}>
                    <button type="button" className={css.buttonOption} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  }

export default FeedbackOptions;