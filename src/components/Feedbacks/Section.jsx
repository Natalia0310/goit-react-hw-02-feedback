import React from 'react';
import PropTypes from 'prop-types';
import './Feedbacks';
import css from './Feedbacks.module.css';

function Section({title, children}) {
    return (
        <section>
            <h2 className={css.sectionTitle}>{title}</h2>
            {children}
        </section>
    );
}
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  }

export default Section;