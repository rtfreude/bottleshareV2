import axios from 'axios';
import { FETCH_USER } from './types';
import { SHOW_MODAL, HIDE_MODAL } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
};

export const showModal = ({ modalType, modalProps }) => {
  console.log('show modal action hit in action/index.js')
  return {
    type: SHOW_MODAL,
    modalType: 'LOGIN_LIST',
    modalProps: modalProps
  }
}

export const hideModal = ({ modalType, modalProps }) => {
  return {
    type: HIDE_MODAL,
    modalType: 'LOGIN_LIST',
    modalProps: modalProps
  }
}

