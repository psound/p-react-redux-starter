const appReducer = (state = {}, action) => {
	switch (action.type){
		case 'INITIAL_LOAD':
			return {...state, status: action.payload};
		default:
			return state;
	}
}

export default appReducer;
