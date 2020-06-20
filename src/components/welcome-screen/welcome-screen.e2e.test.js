import React from 'react';
import {shallow} from 'enzyme';
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
  // Step 2: Unit test - errorCount number has a correct type
  it(`check the type of errorCount`, () => {
    const wrapper = shallow(<WelcomeScreen errorCount={testData.errorCount} onWelcomeButtonClick={()=>{}} />);
    expect(typeof wrapper.prop(`errorCount`) === `number`);
  });
  // Step 3: Unit test - check if the logo img scr is correct
  it(`logo source is correct`, () => {
    const wrapper = shallow(<WelcomeScreen errorCount={testData.errorCount} onWelcomeButtonClick={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
