import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginModalReducer from './loginModalReducer'

export default combineReducers({
  auth: authReducer,
  loginModal: loginModalReducer
});