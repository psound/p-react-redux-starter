const INITIAL_STATE = {
	cities: []
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'INITIAL_LOAD':
			return {...state, status: action.payload};
		case 'LOCATION_DATA':
			return {...state, cities: action.payload.cities}
		default:
			return state;
	}
}

export default appReducer;
