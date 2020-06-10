import React from 'react';
import WelcomeScreen from '../welcomeScreen/welcomeScreen.jsx';

export default class App extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {errorsNumber} = this.props;

    return <WelcomeScreen errorsNumber={errorsNumber} />;
  }
}
