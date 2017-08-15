import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beerReducer from './beerReducer';
import beerDetails from './beerDetailsReducer';

export default combineReducers({
  auth: authReducer,
  beer: beerReducer,
  beerDetails: beerDetails
});