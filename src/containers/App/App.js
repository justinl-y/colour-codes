import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Colours from '../../components/Colours';
import Button from '../../components/Button';
import styles from './styles.css';

const App = ({ colours, getColours }) => (
  <div className={styles.container}>
    <Header />
    <Colours colours={colours} />
    <Button
      onClick={getColours}
      title="Change Colours"
    />
  </div>
);

App.propTypes = {
  colours: PropTypes.array.isRequired,
  getColours: PropTypes.func.isRequired,
};

export default App;
