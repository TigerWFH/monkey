import {HOME_DATA} from '../action';

function home(state = {}, action){
    switch(action.type){
        case HOME_DATA:
        let payload = action.payload || {};
        return {...state, ...payload};
    }

    return state;
}


export default home;