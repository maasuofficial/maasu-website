import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './components/ThemeProvider';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();

