export const HOME_DATA = Symbol('homeData');


export function getMockData(){
    return {
        type: HOME_DATA,
        payload: {
            name: 'monkey home'
        }
    }
}