import AsteroidsReducer from "./AsteroidsReducer.js";
import DeleteAsteroidsReducer from "./DeleteAsteroidsReducer.js";
import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


let reducers = combineReducers({
	Asteroids: AsteroidsReducer,
	DeleteAsteroids: DeleteAsteroidsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
