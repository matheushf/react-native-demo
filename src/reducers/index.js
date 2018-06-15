import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import Categorias from './Categorias';
import Orcamento from './Orcamento';

export default combineReducers({
  auth: AuthReducer,
  orcamento: Orcamento,
  categorias: Categorias
});
