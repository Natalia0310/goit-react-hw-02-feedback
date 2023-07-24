import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

function Statistics(props) {


    const { good, neutral, bad, total, positivePercentage} = props;
    return (
            <ul className={css.feedbackValues}>
                <li>
                    <span className={css.textValue}>Good: <span className={css.numberValue}>{good}</span></span>
                </li>
                <li>
                    <span className={css.textValue}>Neutral: <span className={css.numberValue}>{neutral}</span></span>
                </li>
                <li>
                    <span className={css.textValue}>Bad: <span className={css.numberValue}>{bad}</span></span>
                </li>
                <li>
                    <span className={css.textValue}>Total: <span className={css.numberValue}>{total}</span></span>
                </li>
                <li>
                    <span className={css.textValue}>
                    Positive feedback: <span className={css.valuePercentage}>{positivePercentage}%</span>
                    </span>
                </li>
            </ul>
    );
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }
export default Statistics;