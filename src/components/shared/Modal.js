import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from "styled-components";
import Modal from 'react-native-modalbox';
import { Card, Button, Text, Icon, Divider } from 'react-native-elements';

class ModalWrapper extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  render() {

    console.log('modal ', this.props);

    return (
      <Modal
        style={[styles.modal, styles.modal3]}
        position={"center"}
        // ref={this.props.id}
        isDisabled={this.props.disabled}
        onClosed={this.props.onClose}
        onOpened={this.props.onOpen}
        onClosingState={this.props.onClosingState}
      >
        <Text h3>{this.props.title}</Text>

        <Divider style={{ backgroundColor: 'blue' }} />

        {this.props.children}

        <ButtonsGroup>
          <Button
            onPress={() => state.isOpen = false}
            title={'Cancelar'}
          />
          <Button
            onPress={() => this.props.onConfirm}
            title={'Salvar'}
          />
        </ButtonsGroup>
      </Modal>
    );
  };
}

const ButtonsGroup = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

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

export default ModalWrapper;