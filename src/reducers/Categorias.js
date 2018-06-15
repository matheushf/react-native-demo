import { GET_CATEGORIAS, GET_CATEGORIAS_SUCCESS, GET_CATEGORIAS_FAIL } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIAS_SUCCESS:
    
      return { sucesso: action.payload };

    case GET_CATEGORIAS_FAIL:
      return { erro: action.payload };
    default:
      return state;
  }
}