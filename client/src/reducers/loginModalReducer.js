import { SHOW_MODAL } from '../actions/types';
import { HIDE_MODAL } from '../actions/types';

const initialState = {
  modalType: null,
  modalProps: {}
}

export default function modal(state = initialState, action) {
  console.log('modal reducer: ', action)
 switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

