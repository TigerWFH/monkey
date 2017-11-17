/**
 * @title:      app store
 * @author:     Monkey
 * @email:      334080374@qq.com
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

import createReducers from './reducer';

const logger = createLogger({
    duration: true,
    logErrors: true,
    collapsed: true,
    actionTransformer: (action) => ({ ...action, type: action.type && action.type.toString() })
});

let middleWares = [thunkMiddleWare, logger];
let initialState = {};
let store = createStore(createReducers(), initialState, applyMiddleware(...middleWares));
store.asyncReducers = {};
export default store;