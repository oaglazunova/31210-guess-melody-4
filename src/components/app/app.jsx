import React from 'react';
import {WelcomeScreen} from '../welcomeScreen/welcomeScreen.jsx';

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;

  return <WelcomeScreen errorCount={errorCount} />;
};
