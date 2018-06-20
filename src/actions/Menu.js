import { Actions } from 'react-native-router-flux';
import { TOGGLE_MENU } from './types';

export const toggleMenu = (isOpen) => {
  return (dispatch) => {
    console.log('toggle action ');

    dispatch({ type: TOGGLE_MENU, payload: isOpen });
  }
}