import React, { Component } from 'react';
import styled from "styled-components";
import { Button, Icon } from 'react-native-elements';

const ButtonGroupModal = (props) => {

  return (
    <ButtonsGroup>
      <Button
        onPress={props.onCancel}
        title={props.left}
      />
      <Button
        onPress={props.onConfirm}
        title={props.right}
      />
    </ButtonsGroup>
  )
}

const ButtonsGroup = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 10px 0;
`;

export { ButtonGroupModal };