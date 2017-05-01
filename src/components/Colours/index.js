import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

import ColourBox from '../../components/ColourBox';

const Colours = ({ colours }) => (
  <div className={styles.container}>
    {
      colours.map(colour => (
        <ColourBox
          key={Math.random() * Date.now()}
          colour={colour}
        />
      ))
    }
  </div>
);

Colours.propTypes = {
  colours: PropTypes.array.isRequired,
};

export default Colours;
