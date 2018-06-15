import React, { Component } from 'react';
import { View, Text, AsyncStorage, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../shared';
import { getCategorias, getOrcamento } from '../../actions';
import ListItem from './ListItem';
import { Actions } from 'react-native-router-flux';

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

  logout() {
    AsyncStorage.clear();
    Actions.auth();
  }

  render() {
    return (
      <View>
        <Text>Categoriass</Text>

        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

        <Card>
          <CardSection>
            <Button onPress={this.logout.bind(this)}>
              Logout
            </Button>
          </CardSection>
        </Card>
      </View>
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