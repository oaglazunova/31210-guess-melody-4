import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import QuestionArtist from '../question-artist/question-artist.jsx';
import QuestionGenre from '../question-genre/question-genre.jsx';
import {GameType} from '../../const.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen errorCount={errorCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <main className="app">
        <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
            <feOffset dx="0" dy="0"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </svg>

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {this._renderGameScreen()}
            </Route>
            <Route exact path="/dev-artist">
              <QuestionArtist question={questions[1]} onAnswer={() => {}} />
            </Route>
            <Route exact path="/dev-genre">
              <QuestionGenre question={questions[0]} onAnswer={() => {}} />
            </Route>
          </Switch>
        </BrowserRouter>

      </main>
    );
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
