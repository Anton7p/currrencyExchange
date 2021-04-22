import {createArrayWithAsteroids} from "../lib/createArrayWithAsteroids.js"
import {i18} from "../lib/i18.js"

let initialState = {
	asteroids: [],
	asteroidsInfo: []
}


const AsteroidsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ASTEROIDS':
			let arrayAsteroids = createArrayWithAsteroids(action.response.near_earth_objects)
			return {...state, asteroids: [...state.asteroids, ...arrayAsteroids]};
		case 'SET_ASTEROID_INFO':
			return {
				...state, asteroidsInfo: action.response
			};
		default: {
			return state;
		}
	}
};


export default AsteroidsReducer;
