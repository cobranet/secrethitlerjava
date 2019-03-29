import { authHeader } from '../auth';

export const chatServices = {
    message
}

function message(message,to){
    console.log(authHeader());
      const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json',
		   'Access-Control-Allow-Credentials': true
		 },
          body: JSON.stringify({ message:message,
				 to: to
			       })
      };

    return fetch(`/message`,requestOptions)
	.then((response)=>{
	    if(response.status === 200) {
		return { ok: true}
	    } else {
		const error = response.message || response.statText;
		return Promise.reject(error);
	    }
	});
      
  
}
