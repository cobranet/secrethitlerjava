export function websockaction(actiontype,payload){
    return { type: actiontype,
	     payload: payload}
}
