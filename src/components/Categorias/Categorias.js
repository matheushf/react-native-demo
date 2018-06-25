import React, { Component } from 'react';
import { View, AsyncStorage, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import { Card, CardSection, Button } from '../shared';
import { Header, Card, Button, Text, List, ListItem } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu/Menu';
import { getCategorias, getOrcamento, toggleMenu } from '../../actions';
// import ListItem from './ListItem';
import { Content } from '../shared/Content';
import ContentWrapper from '../shared/ContentWrapper';

class Categorias extends Component {

  constructor() {
    super();

    this.state = {
      dataSource: [],
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
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

  renderRow(rowData, sectionID) {
    console.log('renderRow ', sectionID);

    return (
      <ListItem
        key={sectionID}
        title={rowData.nome}
        subtitle={'subtitle'}
        onPress={() => Actions.itensCategoria({ categoria: rowData })}
      />
    )
  }

  renderRow2(categoria) {
    return <ListItem categoria={categoria} goTo={() => Actions.itensCategoria()} />;
  }

  renderHeader() {
    return {
      leftComponent: 'menu',
      centerComponent: { text: 'Categorias', style: { color: '#fff' } },
      rightComponent: { icon: 'add', color: '#fff', onPress: () => { } }
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    return (
      <ContentWrapper header={this.renderHeader()}>
        <Text h3></Text>

        <Button onPress={() => this.refs.modal3.open()} style={styles.btn} title='Basic modal' />

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Text style={styles.text}>Modal centered</Text>
          <Button 
          onPress={() => this.setState({ isDisabled: !this.state.isDisabled })} 
          style={styles.btn} 
          title={ 'Disable ' + this.state.isDisabled ? "true" : "false"} />
        </Modal>

        <List>
          <ListView
            enableEmptySections
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
      </ContentWrapper>
    )
  }
}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

const mapStateToProps = state => {
  console.log('mapStateToProps Categorias ', state);
  const { categorias, orcamento, menu } = state;

  return { categorias, orcamento, menu };
}

// export default Categorias;
export default connect(mapStateToProps, { getCategorias, getOrcamento, toggleMenu })(Categorias);