import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { ApiBase } from '../api';
import { GET_CATEGORIAS_SUCCESS, GET_CATEGORIAS_FAIL } from './types';

export const getCategorias = (orcamentoId) => {
  return (dispatch) => {
    console.log('getCategorias ');

    axios
      .get(`${ApiBase}/orcamentos/${orcamentoId}/categorias/`)
      .then(response => {
        console.log('getCategorias suc');
        dispatch({ type: GET_CATEGORIAS_SUCCESS, payload: response })
      })
      .catch(error => {
        console.log('getCategorias error');
        dispatch({ type: GET_CATEGORIAS_FAIL, payload: error })
      });
  }
}