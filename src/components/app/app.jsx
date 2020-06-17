import React from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const onWelcomeButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log(`Start button clicked`);
};

export const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen errorCount={errorCount} onWelcomeButtonClick={onWelcomeButtonClick}/>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};
