import { combineReducers } from 'redux';
import {alert} from './reducers/alert';
import {authentication,signin} from './reducers/user';
import {chat} from './reducers/chat';
const rootReducer = combineReducers({
    alert,
    authentication,
    signin,
    chat,

})

export default rootReducer
