import { combineReducers } from 'redux';
import dogsReducer from './dogsReducers';

export default combineReducers({
    dogs: dogsReducer
});
