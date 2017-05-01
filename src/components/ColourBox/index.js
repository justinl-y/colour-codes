import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const ColourBox = ({ colour }) => (
  <div
    className={styles['colour-box']}
    style={{ backgroundColor: colour }}
  >
    <p>{colour}</p>
  </div>
);

ColourBox.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default ColourBox;
