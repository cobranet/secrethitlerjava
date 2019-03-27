import { combineReducers } from 'redux';
import {alert} from './reducers/alert';

const rootReducer = combineReducers({
    alert,
})

export default rootReducer
