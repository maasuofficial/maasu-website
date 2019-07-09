import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-utility-components';
import { ThemeProvider } from './components';
import theme from './_theme';
import './index.scss';

const app = (
    <Provider>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
