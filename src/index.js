import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import store from './store';

import './index.css';
import * as serviceWorker from './serviceWorker';
// pages
// import Home from './pages/home';
// import Demo from './pages/demo';

const Loading = function(props) {
    return null;
}

const asyncDemo = Loadable({
    loader: () => import(/* webpackChunkName: "demo" */ './pages/demo'),
    loading: Loading,
    delay: 300
});

const asyncHome = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ './pages/home'),
    loading: Loading,
    delay: 300
});

const router = (
    <Provider store={store}>
        <Router>
            <Switch>
                {/* <Route path='/' exact component={Home}></Route> */}
                <Route path='/home' exact component={asyncHome}></Route>
                <Route path='/demo' exact component={asyncDemo}></Route>
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
