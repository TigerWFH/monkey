import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import home from './pages/home/reducers';

// initialState会被作为当前state，并传递给各个子reducers
// 可以在此处设置页面初始化数据
const initialState = {
    home: {
        status: 2
    }
};
// reducers
const rootReducers = combineReducers({
    home
});

// middlewares
const middleWares = [thunk];
if ('development' === process.env.NODE_ENV) {
    const logger = createLogger({
        duration: true,
        logErrors: true,
        collapsed: true,
    });
    middleWares.push(logger)
}

const store = createStore(rootReducers, initialState, applyMiddleware(...middleWares));

export default store;