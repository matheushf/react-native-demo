import { TOGGLE_MENU } from "../actions/types";

const INITIAL_STATE = {
  isOpen: false,
  selectedItem: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      console.log('TOGGLE MENU ', action);
      return { ...state, ...action.payload };

    default:
      return state;
  }
}