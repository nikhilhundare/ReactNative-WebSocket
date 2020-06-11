import { types } from '../actions/appAction';
const INITIAL_STATE = {

}
const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.INIT_WEB_SOCKETS_CHANNEL:
            return {
                ...state
            }
        case types.WEBSOCKETS_MESSAGE_RECEIVED:
            return {
                ...state,
                response: action.data
            }
        default: return state;
    }
}
export default appReducer;