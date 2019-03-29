const initialState = {lobby: [], game: [], me: [] }

export function chat(state = initialState,action){
    switch(action.type){
    case 'NEW_MESSAGE':
	return  {...state, lobby: [ ...state.lobby,  action.payload ]}
    default:
	return state;
    }
}
