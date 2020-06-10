import React from 'react';

export default class WelcomeScreen extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {errorsNumber} = this.props;

    return <h1>Hello world! Errors: {errorsNumber}</h1>;
  }
}
