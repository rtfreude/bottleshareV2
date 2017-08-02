import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { modals, name } from './loginModalReducer'

export default combineReducers({
  auth: authReducer,
  modals,
  name
});

