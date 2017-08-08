import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beerReducer from './beerReducer';

export default combineReducers({
  auth: authReducer,
  beer: beerReducer
});