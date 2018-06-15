import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LOGIN_USER, EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from './types';
import axios from 'axios';
import { ApiLogin, ApiKey } from '../api';

export const LoginHeaders = new Headers();
LoginHeaders.append('Accept', 'application/json');
LoginHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {

    console.log('loginUser ', email, password, LoginHeaders);

    // Primeiro retornar dispatch com a acao pra dizer o que ta acontecendo
    dispatch({ type: LOGIN_USER });

    let data = `grant_type=password&username=${email}&password=${password}&${ApiKey}`;

    // Depois fazer a requisicao e etc
    axios
      .post(ApiLogin, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => {
        loginUserSuccess(response, dispatch);
      })
      .catch((error) => {
        loginUserFail(error, dispatch);
      });
  }
}

const loginUserSuccess = (response, dispatch) => {
  console.log('login success ', response);
  let data = response.data;

  /* try {
    await AsyncStorage.setItem('@MySuperStore:teste', JSON.stringify(data))
      .then(async response => console.log('set then ', response));
  } catch (error) {
    console.log('set error ', error);
  } */

  AsyncStorage.setItem('loginData', JSON.stringify(data))
    .then(response => {
      console.log('set ', response);
    })
    .catch(error => {
      console.log('set ', error);
    });

  setHeaders(data);

  /* AsyncStorage.multiSet([
    ['token', data.access_token],
    ['expiresIn', data.expires_in],
    ['refreshToken', data.refresh_token],
    ['isAuth', true]
  ]); */

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: response
  });

  Actions.main();
};

const loginUserFail = (error, dispatch) => {
  console.log('login error ', error.response)
  dispatch({ type: LOGIN_USER_FAIL });
}

export const setHeaders = (response) => {
  console.log('setHeaders ', response);
  let data = JSON.parse(response);


  // Headers HTTP para páginas autenticadas
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}