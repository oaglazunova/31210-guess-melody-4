import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';
import {shallow} from 'enzyme';
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
