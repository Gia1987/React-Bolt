import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
