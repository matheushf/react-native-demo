import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from "./components/Splash";
import Login from "./components/Auth/Login";
import Categorias from './components/Categorias/Categorias';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="splash" hideNavBar>
          <Scene key="splash" component={Splash} initial />
        </Scene>

        <Scene key="auth">
          <Scene key="login" component={Login} hideNavBar />
        </Scene>

        <Scene key="main">
          <Scene key="categorias" component={Categorias} title="Categorias" hideNavBar />
        </Scene>
      </Scene>
    </Router>
  )
} 

export default RouterComponent;