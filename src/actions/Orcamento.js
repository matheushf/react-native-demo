import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { ApiBase } from '../api';
import { GET_ORCAMENTO_SUCCESS, GET_ORCAMENTO_FAIL } from './types';

export const getOrcamento = () => {
  return (dispatch) => {
    console.log('getOrcamento ');

    axios
      .get(`${ApiBase}/orcamentos/`)
      .then(response => {
        console.log('getOrcamento suc ', response.data);
        dispatch({ type: GET_ORCAMENTO_SUCCESS, payload: response.data.Data[0] })
      })
      .catch(error => {
        console.log('getOrcamento error ', error.response);
        dispatch({ type: GET_ORCAMENTO_FAIL, payload: error })
      });
  }
}