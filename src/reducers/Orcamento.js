import { GET_ORCAMENTO, GET_ORCAMENTO_SUCCESS, GET_ORCAMENTO_FAIL } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORCAMENTO_SUCCESS:
      console.log('GET_ORCAMENTO_SUCCESS ', action);
      return action.payload;

    case GET_ORCAMENTO_FAIL:
      return action.payload;
    default:
      return state;
  }
}