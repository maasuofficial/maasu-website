import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ThemeProvider } from './components';
import theme from './__theme';
import './index.scss';

const app = (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)


ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

