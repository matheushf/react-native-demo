import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import Orcamento from './Orcamento';
import Menu from './Menu';
import Gastos from './Gastos';

export default combineReducers({
  menu: Menu,
  auth: AuthReducer,
  orcamento: Orcamento,
  gastos: Gastos
});
