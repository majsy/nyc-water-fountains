import React, { render } from 'preact';
import './scss/index.scss';
import App from './js/components/App';
import * as serviceWorker from './serviceWorker';
import 'preact/devtools';

render(<App />, document.body);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();