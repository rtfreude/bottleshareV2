import axios from 'axios';
import { FETCH_USER, FETCH_BEER_DETAILS, FETCH_BEER } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
};

export const fetchBeer = (input) => async dispatch => {
  const res = await axios.get('/api/searchbeer', {
    params: {
      input: input
    }
  })
  dispatch({
    type: FETCH_BEER,
    payload: res.data
  })
};

export const fetchBeerDetails = (beer) => async dispatch => {
  const res = await axios.get('/api/beerdetails', {
    params: {
      beer: beer
    }
  })
  dispatch({
    type: FETCH_BEER_DETAILS,
    payload: res.data.data[0]
  })
};

