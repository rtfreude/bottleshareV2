import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_BEER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
};

export const fetchBeer = () => async dispatch => {
  console.log('action been hit')
  const res = await axios.get('/api/searchbeer')
  console.log('res', res)
  dispatch({
    type: FETCH_BEER,
    payload: res.data
  })
};


