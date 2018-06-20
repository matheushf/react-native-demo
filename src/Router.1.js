import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Splash from "./components/Splash";
import Login from "./components/Auth/Login";
import Categorias from './components/Categorias/Categorias';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu/Menu';
import { toggleMenu } from './actions/'

class RouterComponent extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      selectedItem: null
    };
  }

  

  render() {
    

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
}

/* const RouterComponent = () => {

} */

const mapStateToProps = state => {
  console.log('mapStateToProps Router ', state);
  const { menu } = state;

  return { menu };
}

export default connect(mapStateToProps, { toggleMenu })(RouterComponent);