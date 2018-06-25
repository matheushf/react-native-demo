import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Header } from 'react-native-elements';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { toggleMenu } from '../../actions';
import Menu from '../Menu/Menu';

class ContentWrapper extends Component {
  constructor() {
    super();
  }

  leftHeader() {
    switch (this.props.header.leftComponent) {
      case 'menu':
        return {
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.toggleMenu({ isOpen: !this.props.menu.isOpen })
        };
      case 'back':
        return {
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => Actions.pop()
        };

      default:
        return this.props.header.leftComponent
    }
  }

  render() {
    console.log('content wrapper ', this.props);

    return (
      <SideMenu
        menu={<Menu />}
        isOpen={this.props.menu.isOpen}
      >
        <View style={{ backgroundColor: 'white', flex: 1 }} >
          <Header
            leftComponent={this.leftHeader()}
            centerComponent={this.props.header.centerComponent}
            rightComponent={this.props.header.rightComponent}
          />
          {this.props.children}
        </View>
      </SideMenu>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps Content ', state);
  const { menu } = state;

  return { menu };
}

export default connect(mapStateToProps, { toggleMenu })(ContentWrapper);