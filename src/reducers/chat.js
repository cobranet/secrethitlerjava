const initialState = []

export function chat(state = initialState,action){
    switch(action.type){
    case 'NEW_MESSAGE':
	return [ ...state,action.payload ]
    default:
	return state;
    }
}
