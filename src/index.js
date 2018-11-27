import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

// pages
import Home from './pages/home';

import './index.css';
import * as serviceWorker from './serviceWorker';

const router = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
