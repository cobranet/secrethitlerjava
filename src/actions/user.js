import {userService} from '../services/user';
import {alertActions} from './alert';
export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
		
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return{ type: 'LOGIN_FAILURE', error } }
}

function logout() {
    userService.logout();
    return { type: 'LOGOUT' };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
	
        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
		    console.log(error.toString());
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: 'REGISTER_REQUEST', user } }
    function success(user) { return { type: 'REGISTER_SUCCESS', user } }
    function failure(error){ return{ type: 'REGISTER_FAILURE', error } }
}



