import { FETCH_BEER } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BEER:
      return action.payload || false;
    default:
      return state;
  }
}