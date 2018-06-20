import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import Categorias from './Categorias';
import Orcamento from './Orcamento';
import Menu from './Menu';

export default combineReducers({
  menu: Menu,
  auth: AuthReducer,
  orcamento: Orcamento,
  categorias: Categorias
});
