import React, { Component } from 'react';
import { View, AsyncStorage, ListView } from 'react-native';
import { connect } from 'react-redux';
// import { Card, CardSection, Button } from '../shared';
import { Header, Card, Button, Text, List, ListItem } from 'react-native-elements';
import SideMenu from 'react-native-side-menu';
import { Router, Actions } from 'react-native-router-flux';
import Menu from '../../Menu/Menu';
import { getCategorias, getOrcamento, toggleMenu } from '../../../actions';
import { Content } from '../../shared/Content';
import ContentWrapper from '../../shared/ContentWrapper';

class Itens extends Component {

  constructor() {
    super();

    this.state = {
      dataSource: []
    }
  }

  componentWillMount() {
    console.log('componentWillMount itens ', this.props);
    // this.createDataSource(this.props);
  }

  obterCategorias() {
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);

    this.createDataSource(nextProps);
  }

  renderRow(categoria) {
    return <ListItem categoria={categoria} />;
  }

  renderHeader() {
    return {
      leftComponent: 'back',
      centerComponent: { text: this.props.categoria.nome, style: { color: '#fff' } }
    };
  }

  render() {
    return (
      <ContentWrapper header={this.renderHeader()}>
        <Text h3>          
        </Text>

        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.props.categoria.itens.map((l, i) => (
              <ListItem
                key={i}
                title={l.nome}
              />
            ))
          }
        </List>
      </ContentWrapper>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps Itens ', state);
  const { categorias, orcamento, menu } = state;

  return { categorias, orcamento, menu };
}

// export default Categorias;
export default connect(mapStateToProps, { getCategorias, getOrcamento, toggleMenu })(Itens);