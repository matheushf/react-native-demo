import { GET_GASTOS, GET_GASTOS_ITENS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GASTOS:
      return action.payload;

    case GET_GASTOS_ITENS:
      return action.payload;

    default:
      return state;
  }
}