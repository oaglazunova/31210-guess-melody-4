import React from 'react';
import {shallow} from 'enzyme';
import {it, expect, describe, jest} from '@jest/globals';
import {WelcomeScreen} from './welcome-screen.jsx';

const testData = {
  errorCount: 1
};

describe(`Welcome Screen component`, () => {
// Step 1: Test callback on the game start button
  it(`callback for .welcome__button is received`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorCount={testData.errorCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.props().onClick();

    expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
  });
});
