import React, { Component } from 'react';
import { View, AsyncStorage, ListView } from 'react-native';
import { connect } from 'react-redux';
// import { Card, CardSection, Button } from '../shared';
import { Header, Card, Button, Text } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import { getCategorias, getOrcamento } from '../../actions';
import ListItem from './ListItem';
import Menu from '../Menu/Menu';

class Categorias extends Component {

  constructor() {
    super();

    this.state = {
      dataSource: [],
      isOpen: false
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.obterOrcamento();
    this.createDataSource(this.props);
  }

  obterOrcamento() {
    this.props.getOrcamento();
    console.log('obterOrcamento ', this.props);
  }

  obterCategorias() {
    this.props.getCategorias();
    // this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);

    /* if (nextProps.categorias === {}) {
      this.obterCategorias();
    } */

    this.createDataSource(nextProps);
  }

  createDataSource({ orcamento }) {
    console.log('createDataSource ', orcamento);
    let categorias = orcamento && orcamento.categorias ? orcamento.categorias : {};

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({ dataSource: ds.cloneWithRows(categorias) })
  }

  renderRow(categoria) {
    return <ListItem categoria={categoria} />;
  }

  updateMenuState(isOpen) {
    console.log('update ', isOpen);
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  logout() {
    AsyncStorage.clear();
    Actions.auth();
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={{ backgroundColor: 'white', flex: 1 }} >
          <Header
            leftComponent={{ icon: 'menu', color: '#fff', onPress:  () => this.updateMenuState(!this.state.isOpen)  }}
            centerComponent={{ text: 'Categorias', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <Text h3>Categoriass</Text>

          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />

          <Card>
            <Button
              onPress={this.logout.bind(this)}
              title="Logout"
              icon={{ name: 'exit-to-app' }}
            />
          </Card>
        </View>
      </SideMenu>
    );
  };
}

const mapStateToProps = state => {
  console.log('mapStateToProps Categorias ', state);
  const { categorias, orcamento } = state;

  return { categorias, orcamento };
}

// export default Categorias;
export default connect(mapStateToProps, { getCategorias, getOrcamento })(Categorias);