const INITIAL_STATE = {
	data:[]
}


const AppReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'INITIAL_LOAD':
			return { ...state, data: action.payload.data };
		default:
			return state;
	}
}

export default AppReducer;
