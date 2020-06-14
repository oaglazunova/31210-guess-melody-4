import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';
import {App} from './app.jsx';

const testData = {
  errorCount: 3
};

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <App errorCount={testData.errorCount}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
