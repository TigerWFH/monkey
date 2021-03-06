import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import store from './store';
import Mask from './components/Mask';
import './index.css';
import * as serviceWorker from './serviceWorker';
// pages
// import Home from './pages/home';
// import Demo from './pages/demo';

const Loading = function (props) {
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

function App(props) {
    return (
        <Router>
            <Switch>
            <Route path='/' exact component={asyncHome}></Route>
            <Route path='/home' exact component={asyncHome}></Route>
            <Route path='/demo' exact component={asyncDemo}></Route>
            <Redirect to='/' />
            </Switch>
        </Router>
    );
}

const router = (
    <Provider store={store}>
        <div>
            <Mask />
            <App />
        </div>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
