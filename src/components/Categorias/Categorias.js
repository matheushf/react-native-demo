import React, { Component } from 'react';
import { View, AsyncStorage, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styled from "styled-components";
import { Header, Card, Button, Text, List, ListItem, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modalbox';
import FAB from 'react-native-fab';
import { Spinner, ButtonGroupModal } from '../shared';
import ContentWrapper from '../shared/ContentWrapper';
import ModalWrapper from '../shared/Modal';
import { getCategorias, getOrcamento, toggleMenu } from '../../actions';

class Categorias extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.obterOrcamento();
  }

  obterOrcamento() {
    this.props.getOrcamento();
    console.log('obterOrcamento ', this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
  }

  renderHeader() {
    return {
      leftComponent: 'menu',
      centerComponent: { text: 'Categorias', style: { color: '#fff' } },
      // rightComponent: { icon: 'add', color: '#fff', onPress: () => this.refs.modal3.open() }
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
        <FAB
          buttonColor="red"
          iconTextColor="#FFFFFF"
          iconTextComponent={<Icon name="add" />}
          onClickAction={() => { this.refs.modal3.open() }}
          // onPress={() => this.refs.modal3.open()}
          visible={true}
        />

        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={'modal3'}
          isOpen={this.state.isOpen}
        >
          <Text h3>Nova Categoria</Text>

          <Divider style={{ backgroundColor: 'blue' }} />

          <ButtonGroupModal
            left={'Cancelar'}
            right={'Salvar'}
            onCancel={() => { this.refs.modal3.close() }}
            onConfirm={() => { console.log('oi') }}
          />
        </Modal>

        <List>
          {
            this.props.orcamento.categorias.map((categoria, i) => (
              <ListItem
                key={i}
                title={categoria.nome}
                onPress={() => Actions.itensCategoria({ categoria: categoria })}
              />
            ))
          }
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