import * as t from '../actions/actionTypes';

const initalState = {
    name: 'reducer-default-monkey',
    status: -1
};

export function home(state = initalState, action) {
    switch (action.type) {
        case t.GET_HOME:
            return {
                ...state,
                name: "home-first",
                status: 0,
            };
        default:
            return state;
    }
}

export default home;