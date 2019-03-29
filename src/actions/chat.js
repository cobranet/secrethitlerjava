import {chatServices} from '../services/chat';
import { alertActions } from './alert'; 
export function message(message,to) {
    return dispatch =>{
	chatServices.message(message,to)
	    .then(
		data=>{
		    return { type:"MESSAGE_SEND"}
		},
		error=>{
                    dispatch(alertActions.error(error.toString()));
		}
	    )
    }
}
