/**
 * @title:      app reducers
 * @author:     Monkey
 * @email:      334080374@qq.com
 */
import {
    combineReducers
} from 'redux';

import home from './pages/home/reducer';

export default (asyncReducers)=>{
    if (asyncReducers){
        return combineReducers({
            asyncReducers
        });
    }
    
    return combineReducers({
        root,
        home
    });
};

function root(state = {}, action){
    return state;
}