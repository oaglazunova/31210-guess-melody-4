import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

const testData = {
  errorCount: 1
};

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <WelcomeScreen errorCount={testData.errorCount} onWelcomeButtonClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
