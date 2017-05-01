import React, { Component } from 'react';
import ColourFormats from '../../libs/colour-converters';
import App from './App';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colours: [],
    };

    this.getRandomColourCodes = this.getRandomColourCodes.bind(this);
  }

  componentWillMount() {
    this.getRandomColourCodes();
  }

  getRandomColourCodes() {
    const colours = ColourFormats.get();

    return this.setState({ colours });
  }

  render() {
    const colours = this.state.colours;

    return (
      <App
        colours={colours}
        getColours={this.getRandomColourCodes}
      />
    );
  }
}

export default AppContainer;
