const INITIAL_STATE = {
	cities: []
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'INITIAL_LOAD':
			return {...state, status: action.payload};
		case 'LOCATION_DATA':
			return {...state, cities: action.payload.cities}
		case 'ACTIVE_USERS_PER_CITY':
			return {...state, activeUsers: action.payload.activeUsers}
		default:
			return state;
	}
}

export default appReducer;
