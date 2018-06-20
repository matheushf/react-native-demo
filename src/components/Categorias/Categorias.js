import React, { Component } from 'react';
import { View, AsyncStorage, ListView } from 'react-native';
import { connect } from 'react-redux';
// import { Card, CardSection, Button } from '../shared';
import { Header, Card, Button, Text } from 'react-native-elements';
import SideMenu from 'react-native-side-menu';
import { getCategorias, getOrcamento, toggleMenu } from '../../actions';
import ListItem from './ListItem';
import Menu from '../Menu/Menu';

class Categorias extends Component {

  constructor() {
    super();

    this.state = {
      dataSource: []
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

  render() {
    return (
      <SideMenu
        menu={<Menu />}
        isOpen={this.props.menu.isOpen}
      >
        <View style={{ backgroundColor: 'white', flex: 1 }} >
          <Header
            leftComponent={{
              icon: 'menu',
              color: '#fff',
              onPress: () => this.props.toggleMenu({ isOpen: !this.props.menu.isOpen })
            }}
            centerComponent={{ text: 'Categorias', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <Text h3>Categoriass</Text>

          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />

          {/* <Card>
            <Button
              onPress={this.logout.bind(this)}
              title="Logout"
              icon={{ name: 'exit-to-app' }}
            />
          </Card> */}
        </View>
      </SideMenu>
    );
  };
}

const mapStateToProps = state => {
  console.log('mapStateToProps Categorias ', state);
  const { categorias, orcamento, menu } = state;

  return { categorias, orcamento, menu };
}

// export default Categorias;
export default connect(mapStateToProps, { getCategorias, getOrcamento, toggleMenu })(Categorias);