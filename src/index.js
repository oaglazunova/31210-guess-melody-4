import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const errorsNumber = 1337;

ReactDOM.render(<App errorsNumber={errorsNumber} />, document.getElementById(`root`));
