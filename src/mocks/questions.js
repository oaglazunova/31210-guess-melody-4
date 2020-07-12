const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `baroque`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `baroque`,
    }, {
      src: `http://www.long-feng.ru/wp-content/uploads/2016/01/17.Fenghuangtaishangyichuixiao_Laoshi.mp3?_=6`,
      genre: `blues`,
    }, {
      src: `http://www.long-feng.ru/wp-content/uploads/2016/01/44.Pingshaluoyan_ZZQ_duet.mp3?_=25`,
      genre: `jazz`,
    }, {
      src: `http://www.long-feng.ru/wp-content/uploads/2016/01/72.Yizhen_Laoshi.mp3?_=39`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Johann Sebastian Bach`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Johann Sebastian Bach`,
    }],
  }
];
