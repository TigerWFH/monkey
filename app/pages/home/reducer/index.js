function home(state = {}, action){
    switch(action.type){
        case 'LL':
        let payload = action.payload || {};
        return {...state, ...payload};
    }

    return state;
}


export default home;