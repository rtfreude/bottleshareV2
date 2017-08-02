import axios from 'axios';
import { FETCH_USER, SHOW_MODAL, HIDE_MODAL, SET_NAME } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
};

export function showModal(message) {
  return {
    type: SHOW_MODAL,
    message
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name
  }
}

export function setNameAndHideModal(name) {
  return dispatch => {
    if (!name || name.trim() === '') return
    dispatch(setName(name))
    dispatch(hideModal())
  }
}
