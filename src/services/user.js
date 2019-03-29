import { authHeader } from '../auth';



export const userService = {
    login,
    logout,
    register,
    update	

};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
		   'Access-Control-Allow-Credentials': true
		 },
        body: JSON.stringify({ email: username, password: password })
    };
    
    return fetch('/login', requestOptions)
        .then( (response)=>{
	    if (response.status===200 ){
	    const token = response.headers.get("authorization");
	    const user = {email:username,token:token};
	    localStorage.setItem("SecretHitlerUser",JSON.stringify(user));
		return user;
	    }else{
		const error = response.message || response.statusText;
		return Promise.reject(error);
	    }
	});
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('SecretHitlerUser');
}



function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    console.log(user);
    return fetch('/signup', requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/updateme', requestOptions).then(handleResponse);;
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
 //               location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
