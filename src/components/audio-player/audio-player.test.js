import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const scr = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`QuestionGenre is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer isPlaying={false}
        src={scr} onAnswer={() => {}}
        onPlayButtonClick={() => {}} />,
      {createNodeMock: () => {
        return {};
      }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
